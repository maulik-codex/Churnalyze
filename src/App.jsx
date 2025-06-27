import React, { useState } from 'react';
import Sidebar from './Component/Sidebar.jsx';
import Dashboard from './Component/Dashboard.jsx';
import Landing from './Components/Landing.jsx';
import UnpredictedData from './Components/Unpredicted.jsx';

const App = () => {
  const [started, setStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handleNavigate = (page) => {
    const cleanPage = page.replace('./', '').replace('.jsx', '');
    setCurrentPage(cleanPage);
  };

  if (!started) {
    return (
      <Landing
        onGetStarted={() => setStarted(true)}
      />
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onNavigate={handleNavigate} />
      <div style={{ flex: 1, padding: 24 }}>
        {currentPage === 'Dashboard' && <Dashboard />}
        {currentPage === 'UnpredictedData' && <UnpredictedData />}
        {}
      </div>
    </div>
  );
};

export default App;
