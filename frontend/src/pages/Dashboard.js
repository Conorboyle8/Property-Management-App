import React, { useEffect, useState } from 'react';
import PropertyForm from '../components/PropertyForm';
import PropertyList from '../components/PropertyList';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);

  // Fetch properties from backend
  const fetchProperties = async () => {
    const res = await fetch('https://property-management-api.onrender.com/properties');
    const data = await res.json();
    setProperties(data);
  };

  // Post new property to backend
  const addProperty = async (property) => {
    await fetch('https://property-management-api.onrender.com/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property),
    });
    fetchProperties(); // Refresh list after add
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Property Management Dashboard</h1>
      <PropertyForm addProperty={addProperty} />
      <PropertyList properties={properties} />
    </div>
  );
};

export default Dashboard;
