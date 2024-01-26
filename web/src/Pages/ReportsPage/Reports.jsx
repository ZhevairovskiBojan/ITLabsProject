import React, { useState } from 'react'

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, [])
  

  getReports = () => {
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
      <h1>REports</h1>
      {reports.map(r => <div>{r.name}</div>)}
    </div>
  )
}
