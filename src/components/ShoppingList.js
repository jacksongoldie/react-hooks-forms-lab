import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemsList, setItemsList] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");

  function addItem(item){
    setItemsList([...itemsList, item])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [searchValue, setSearchValue] = useState("")

  function onSearchChange(event){
    setSearchValue(event.target.value)
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;
    return (item.category === selectedCategory);
  });

  const searchedToys = itemsToDisplay.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {searchedToys.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
