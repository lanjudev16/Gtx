import React, { useState } from 'react';
import './App.css';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="App min-h-screen bg-gray-100 font-sans">
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Property Manager</h1>
      </div>
      <div className="p-4">
        <div className="flex">
          <div className="w-1/3 pr-4">
            <PropertyList onSelectProperty={property => setSelectedProperty(property)} />
          </div>
          <div className="w-2/3 pl-4">
            {selectedProperty && <PropertyDetail property={selectedProperty} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
