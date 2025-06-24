import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Students from './pages/Dashboard/student';
import Loginpage from './pages/loginpage'
import Dashboard from './pages/Dashboard';
import AddUser from './pages/Dashboard/adduser';
import Organizations from './pages/organizations';
import AddOrganization from './pages/AddOrganizations';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/organizations" element={<Organizations/>}/>
        <Route path="/addorganizations" element={<AddOrganization/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;