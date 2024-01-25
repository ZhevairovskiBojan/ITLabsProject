import React, { useState } from 'react'

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, [])
  

  getReports = () => {
    axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
    setReports(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  return (
    <div>
      <h1>REports</h1>
      {reports.map(r => <div>{r.name}</div>)}
    </div>
  )
}
