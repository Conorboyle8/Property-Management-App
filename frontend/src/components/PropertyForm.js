import React, { useState } from 'react';

const PropertyForm = ({ addProperty }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    rent: '',
    status: 'Vacant',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(formData);
    setFormData({ name: '', address: '', rent: '', status: 'Vacant' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Property</h2>
      <input
        name="name"
        placeholder="Property Name"
        value={formData.name}
        onChange={handleChange}
      /><br />
      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      /><br />
      <input
        name="rent"
        placeholder="Monthly Rent"
        value={formData.rent}
        onChange={handleChange}
      /><br />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Vacant">Vacant</option>
        <option value="Occupied">Occupied</option>
      </select><br />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;
