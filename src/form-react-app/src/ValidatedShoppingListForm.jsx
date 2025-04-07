import { useState } from 'react';

function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({
    product: '',
    quantity: 0,
  });
  const [productIsValid, setProductIsValid] = useState(false);

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };

  const handleChange = (evt) => {
    if (evt.target.name === 'product') {
      validate(evt.target.value);
    }
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
    if(productIsValid) {
      addItem(formData);
      setFormData({ product: '', quantity: 0 });
    }

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
      {!productIsValid && (
        <p style={{ color: 'red' }}>Product name cannot be empty</p>
      )}
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

export default ValidatedShoppingListForm;
