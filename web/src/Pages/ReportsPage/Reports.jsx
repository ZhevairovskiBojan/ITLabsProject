import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, [])
  

  const getReports = () => {
    axios.get('/user?ID=12345')
  .then(response => {
    console.log(response);
    setReports(response)
  })
  .catch(error => {
   
    console.log(error);
  })
  .finally(() => {
    
  });
  }
  return (
    <div>
      <h1>Reports</h1>
      {reports.map(r => <div>{r.name}</div>)}
    </div>
  )
}
