import { useEffect, useState } from 'react';

function App() {
  const [apiStatus, setApiStatus] = useState('loading...');

  useEffect(() => {
    fetch('http://localhost:8000/api/ping')
      .then(response => response.json())
      .then(data => setApiStatus(data.status))
  }, []);

  return (
    <div>
      <h1>Dashboard régis </h1>
      <p>API status: {apiStatus}</p>
    </div>
  );
}

export default App;
