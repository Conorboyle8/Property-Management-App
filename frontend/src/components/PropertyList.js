import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>All Properties</h2>
      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        properties.map((property, idx) => (
          <PropertyCard key={idx} property={property} />
        ))
      )}
    </div>
  );
};

export default PropertyList;
