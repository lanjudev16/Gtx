import React, { useState } from 'react';

const TenantList = ({ tenants, onEdit, onRemove }) => {
  const [editedTenantId, setEditedTenantId] = useState(null);
  const [editedTenantName, setEditedTenantName] = useState('');

  const handleEdit = (id, name) => {
    setEditedTenantId(id);
    setEditedTenantName(name);
  };

  const handleSave = id => {
    onEdit(id, editedTenantName);
    setEditedTenantId(null);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Tenants</h3>
      <ul className="space-y-2">
        {tenants.map(tenant => (
          <li key={tenant.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
            {editedTenantId === tenant.id ? (
              <>
                <input
                  type="text"
                  value={editedTenantName}
                  onChange={e => setEditedTenantName(e.target.value)}
                  className="border border-gray-300 rounded p-1 flex-grow"
                />
                <button
                  className="text-green-600 hover:underline ml-2"
                  onClick={() => handleSave(tenant.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <div className="flex-grow">{tenant.name}</div>
            )}
            <div>
              {editedTenantId === tenant.id ? (
                <button
                  className="text-gray-600 hover:underline mr-2"
                  onClick={() => setEditedTenantId(null)}
                >
                  Cancel
                </button>
              ) : (
                <>
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() => handleEdit(tenant.id, tenant.name)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => onRemove(tenant.id)}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenantList;
