import { useState } from "react";

const ShoppingList = () => {
  const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState([]);
    const [quantity, setquantity] = useState("");
  };
  return (
    <div>
      <h1>Shopping List </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={Quantity}
          onChange={(e) => setQuantity (e.target.value)}
        />


        <button type="submit">Add Item </button>
      </form>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                    {item.name } - Quantity - {item.quantity}
                </li>

            ))}
        </ul>

    </div>
  );
};

export default ShoppingList;
