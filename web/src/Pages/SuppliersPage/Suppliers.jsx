import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, [])
  

  const getSuppliers = () => {
    axios.get('/api/v1/supplier/suppliers') // error 404 ne ja dava rutata
    .then(response => {
      
      console.log(response.data);
      setSuppliers(response.data.data.categories)
    })
    .catch(error => {
     
      console.log(error);
    })
    .finally( () => {
      
    });
  }
  return (
    <div>
      <h1>Suppliers</h1>
      {suppliers.map(supplier => {
        return (
          <div>{supplier.date.toString()}</div>
        )
      })}
    </div>
  )
}
