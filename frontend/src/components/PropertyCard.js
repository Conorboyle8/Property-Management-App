import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h3>{property.name}</h3>
      <p>Address: {property.address}</p>
      <p>Rent: ${property.rent}</p>
      <p>Status: {property.status}</p>
    </div>
  );
};

export default PropertyCard;
