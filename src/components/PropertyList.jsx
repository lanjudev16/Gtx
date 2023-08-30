import React from 'react';
import { properties } from '../mockData';

const PropertyList = ({ onSelectProperty }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Properties</h2>
      <ul className="space-y-2">
        {properties.map(property => (
          <li
            key={property.id}
            className="hover:bg-gray-100 p-2 rounded-lg transition duration-300 cursor-pointer"
            onClick={() => onSelectProperty(property)}
          >
            <div className="font-semibold">{property.name}</div>
            <div className="text-gray-600">{property.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
