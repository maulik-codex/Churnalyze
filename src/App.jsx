import React from 'react'

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App


// import React, { useState } from 'react';
// import Sidebar from './Component/Sidebar.jsx'
// import Dashboard from './Component/Dashboard.jsx'

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('');

  
//   const handleNavigate = (page) => {
//     const cleanPage = page.replace('./', '').replace('.jsx', '');
//     setCurrentPage(cleanPage);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar onNavigate={handleNavigate} />
//       <div style={{ flex: 1, padding: 24 }}>
//         {currentPage === 'Dashboard' && <Dashboard />}
//       </div>
//     </div>
//   );
// }

// export default App;
