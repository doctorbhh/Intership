import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Students from './pages/Dashboard/student';
import Loginpage from './pages/loginpage'
import Dashboard from './pages/Dashboard';
import AddUser from './pages/Dashboard/AddStudent';
import Organizations from './pages/organizations';
import AddOrganization from './pages/AddOrganizations';
import Instructors from './pages/Instructors';
import AddInstructors from './pages/AddInstructors';
import Courses from './pages/Courses';
import AddCourses from './pages/AddCourses';
import Transactions from'./pages/Transactions';
import Announcements from './pages/Announcements';
import PostAnnouncement from './pages/PostAnnouncements';
import Reporting from './pages/Reporting';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddUser/>}/>
        <Route path="/organizations" element={<Organizations/>}/>
        <Route path="/addorganizations" element={<AddOrganization/>}/>
        <Route path="/instructors" element={<Instructors/>}/>
        <Route path="/addinstructors" element={<AddInstructors/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/addcourses" element={<AddCourses/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
        <Route path="/postannouncements" element={<PostAnnouncement/>}/>
        <Route path="/reporting" element={<Reporting/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;