import { useState } from 'react';

function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({
    product: '',
    quantity: 0,
  });

  const handleChange = (evt) => {
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("SUBMITTED!!!");
    addItem(formData);
    setFormData({ product: '', quantity: 0 });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        placeholder="product name"
        value={formData.product}
        name="product"
        id="product"
        onChange={handleChange}
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="1"
        value={formData.quantity}
        name="quantity"
        id="quantity"
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
