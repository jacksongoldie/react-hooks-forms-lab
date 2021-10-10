import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

 const [formData, setFormData] = useState({
   id: uuid(),
   name: '',
   category: 'Produce'});

  function handleChange(e){
    let keyToChange = e.target.name;
    let newThing = e.target.value;

    //use name key to figure out what input is firing ---> e.target.name
    setFormData({...formData, [keyToChange]: newThing})
  }

  function handleSubmit(e){
    e.preventDefault();
    //add data to state that adds shopping list
    onItemFormSubmit(formData)
    debugger;
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select value={formData.category} name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
