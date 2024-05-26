import React, { useState } from 'react';
import warehousesData from '../warehouses.json';
import { useDispatch } from 'react-redux';
import { searchByName, filterWarehouses } from '../features/warehouses/warehousesSlice';

const WarehouseFilter = ({ warehouses, onFilter }) => {
  const [city, setCity] = useState('');
  const [cluster, setCluster] = useState('');
  const [spaceLimit, setSpaceLimit] = useState('');

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterWarehouses({city,cluster,spaceLimit}));
  };
  
  const handleSearch = (e) => {
    const warehouseName = e.target.value.toLowerCase();
    dispatch(searchByName(warehouseName));
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">

      <div className="flex flex-wrap justify-between">
        

        {/* search */}
        <div className='w-1/2'>
            {/* search by name */}
            <input
            type="text"
            placeholder="Search by Warehouse Name"
            // value={name}
            onChange={(e) => handleSearch(e)}
            className="p-2 border rounded-lg w-full"
            />
        </div>

        {/* filters */}
        <div className='flex flex-wrap justify-between gap-4'>
            {/* city */}
            <select value={city} onChange={(e)=>{
              if (e.target.value === 'City') setCity('')
              else setCity(e.target.value)}} className="p-2 border rounded-lg">
                    <option selected>City</option>
                {
                    warehousesData.map((warehouse) => {
                        return <option key={warehouse.id} >{warehouse.city}</option>
                    })
                }
            </select>

            {/* cluster */}
            <select value={cluster} onChange={(e)=>{
              if (e.target.value === 'Cluster') setCluster('')
              else setCluster(e.target.value)}} className="p-2 border rounded-lg">
                    <option selected>Cluster</option>
                {
                    warehousesData.map((warehouse) => {
                        return <option key={warehouse.id}>{warehouse.cluster}</option>
                    })
                }
            </select>

            {/* space_available */}
            <select value={spaceLimit} onChange={(e)=>{
              if (e.target.value === 'Space Available') setSpaceLimit('')
              else setSpaceLimit(e.target.value)}} className="p-2 border rounded-lg">
                    <option selected>Space Available</option>
                {
                    warehousesData.map((warehouse) => {
                        return <option key={warehouse.id}>{warehouse.space_available}</option>
                    })
                }
            </select>

            <button
              onClick={handleFilter}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
              Apply Filters
            </button>
        </div>

      </div>

    </div>
  );
  
};

export default WarehouseFilter;
