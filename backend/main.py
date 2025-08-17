# main.py

import json
import uuid
from typing import List, Optional

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# --- Pydantic Models (Data Validation) ---

class MenuItemCreate(BaseModel):
    name: str = Field(..., min_length=3, max_length=50, description="Name of the menu item")
    price: float = Field(..., gt=0, description="Price of the item in your currency")
    is_veg: bool
    description: Optional[str] = None
    # Add the new image_url field here
    image_url: str = Field(..., description="URL of the sample picture for the item")

class MenuItem(MenuItemCreate):
    id: str

# --- FastAPI App ---

app = FastAPI(
    title="Food Ordering API (JSON Server)",
    description="A simple API using a JSON file as a database.",
    version="1.0.0"
)

# This allows  frontend to talk to your backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                   "https://food-ordering-system-phi.vercel.app"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_FILE = "db.json"

# --- Helper Functions (to read/write JSON file) ---

def load_db() -> List[MenuItem]:
    """Reads the entire database from the JSON file."""
    try:
        with open(DB_FILE, "r") as f:
            data = json.load(f)
           
            return [MenuItem(**item) for item in data["menu_items"]]
    except (FileNotFoundError, json.JSONDecodeError):
        
        return []

def save_db(menu_items: List[MenuItem]):
    """Saves the entire database to the JSON file."""
    with open(DB_FILE, "w") as f:
      
        json_data = {"menu_items": [item.model_dump() for item in menu_items]}
        json.dump(json_data, f, indent=2)

# --- API Endpoints ---

@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Welcome to the Food Ordering API!"}

# CREATE a new menu item
@app.post("/menu-items/", response_model=MenuItem, status_code=status.HTTP_201_CREATED, tags=["Menu Items"])
def create_menu_item(item: MenuItemCreate):
    db = load_db()
    
   
    new_item = MenuItem(id=str(uuid.uuid4()), **item.model_dump())
    
    db.append(new_item)
    save_db(db)
    return new_item

# READ all menu items
@app.get("/menu-items/", response_model=List[MenuItem], tags=["Menu Items"])
def get_all_menu_items():
    return load_db()

# READ a single menu item by ID
@app.get("/menu-items/{item_id}", response_model=MenuItem, tags=["Menu Items"])
def get_menu_item(item_id: str):
    db = load_db()
    for item in db:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Menu item not found")

# UPDATE a menu item
@app.put("/menu-items/{item_id}", response_model=MenuItem, tags=["Menu Items"])
def update_menu_item(item_id: str, updated_item_data: MenuItemCreate):
    db = load_db()
    for i, item in enumerate(db):
        if item.id == item_id:
            # Create a new MenuItem object with the old ID and new data
            updated_item = MenuItem(id=item_id, **updated_item_data.model_dump())
            db[i] = updated_item
            save_db(db)
            return updated_item
    raise HTTPException(status_code=404, detail="Menu item not found")

# DELETE a menu item
@app.delete("/menu-items/{item_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Menu Items"])
def delete_menu_item(item_id: str):
    db = load_db()
    item_to_delete = None
    for item in db:
        if item.id == item_id:
            item_to_delete = item
            break

    if not item_to_delete:
        raise HTTPException(status_code=404, detail="Menu item not found")
    
    db.remove(item_to_delete)
    save_db(db)
    return
