import React, { useState } from 'react';
import TenantList from './TenantList';

const PropertyDetail = ({ property }) => {
  const [tenants, setTenants] = useState(property.tenants);
  const [newTenantName, setNewTenantName] = useState('');

  const addTenant = () => {
    if (newTenantName.trim() === '') return;
    const newTenant = { id: tenants.length + 1, name: newTenantName };
    setTenants([...tenants, newTenant]);
    setNewTenantName('');
  };

  const editTenant = (id, newName) => {
    const updatedTenants = tenants.map(tenant =>
      tenant.id === id ? { ...tenant, name: newName } : tenant
    );
    setTenants(updatedTenants);
  };

  const removeTenant = id => {
    const updatedTenants = tenants.filter(tenant => tenant.id !== id);
    setTenants(updatedTenants);
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{property.name}</h2>
      <p className="text-gray-600 mb-4">Address: {property.address}</p>
      <TenantList tenants={tenants} onEdit={editTenant} onRemove={removeTenant} />
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Enter tenant's name"
          value={newTenantName}
          onChange={e => setNewTenantName(e.target.value)}
          className="border border-gray-300 rounded-l p-2 flex-grow"
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition duration-300"
          onClick={addTenant}
        >
          Add Tenant
        </button>
      </div>
    </div>
  );
};

export default PropertyDetail;
