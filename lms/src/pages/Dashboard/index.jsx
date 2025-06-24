import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

import Pagination from '../../components/ui/Pagination';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('May 01 - May 11');

  // Sample student data
  const studentsData = [
    {
      id: 1,
      name: 'John',
      userId: '#s98765',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Instructor',
      lastLogin: '22:05,12/05/25',
      status: 'Active',
      avatar: '/images/img_frame_5518_35x35.png'
    },
    {
      id: 2,
      name: 'Jude Mariyah',
      userId: '#s987re',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Admin',
      lastLogin: '22:05,12/05/25',
      status: 'Inactive',
      avatar: '/images/img_frame_5518_1.png'
    },
    {
      id: 3,
      name: 'Ben Tension',
      userId: '#s98455',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Student',
      lastLogin: '22:05,12/05/25',
      status: 'Suspended',
      avatar: '/images/img_frame_5518_2.png'
    },
    {
      id: 4,
      name: 'Mary Rawan Rose',
      userId: '#s98765',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Instructor',
      lastLogin: '22:05,12/05/25',
      status: 'Active',
      avatar: '/images/img_frame_5518_3.png'
    },
    {
      id: 5,
      name: 'John',
      userId: '#s98765',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Admin',
      lastLogin: '22:05,12/05/25',
      status: 'Inactive',
      avatar: '/images/img_frame_5518_4.png'
    },
    {
      id: 6,
      name: 'Jude Mariyah',
      userId: '#s987re',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Student',
      lastLogin: '22:05,12/05/25',
      status: 'Active',
      avatar: '/images/img_frame_5518_5.png'
    },
    {
      id: 7,
      name: 'Ben Tension',
      userId: '#s98455',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Student',
      lastLogin: '22:05,12/05/25',
      status: 'Inactive',
      avatar: '/images/img_frame_5518_6.png'
    },
    {
      id: 8,
      name: 'John',
      userId: '#s98765',
      email: 'John@example.com',
      organization: 'Sample Institute',
      role: 'Student',
      lastLogin: '22:05,12/05/25',
      status: 'Suspended',
      avatar: '/images/img_frame_5518_7.png'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Students' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' }
  ];

  const dateRangeOptions = [
    { value: 'May 01 - May 11', label: 'May 01 - May 11' },
    { value: 'May 12 - May 22', label: 'May 12 - May 22' },
    { value: 'May 23 - May 31', label: 'May 23 - May 31' }
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const handleDateRangeChange = (value) => {
    setSelectedDateRange(value);
  };

  const handleExport = () => {
    console.log('Exporting student data...');
    alert('Student data exported successfully!');
  };

  const handleAddUser = () => {
    console.log('Adding new user...');
    alert('Add User form would open here');
  };

  const handleViewStudent = (studentId) => {
    console.log(`Viewing student ${studentId}`);
    alert(`Viewing details for student ID: ${studentId}`);
  };

  const handleEditStudent = (studentId) => {
    console.log(`Editing student ${studentId}`);
    alert(`Editing student ID: ${studentId}`);
  };

  const handleDeleteStudent = (studentId) => {
    console.log(`Deleting student ${studentId}`);
    if (window.confirm('Are you sure you want to delete this student?')) {
      alert(`Student ID: ${studentId} deleted successfully`);
    }
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      Active: 'bg-green-100 text-green-600',
      Inactive: 'bg-yellow-100 text-yellow-600',
      Suspended: 'bg-red-100 text-red-600'
    };

    return (
      <span className={`px-3 py-1 rounded text-xs font-medium ${statusClasses[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <div className="ml-64">
        <Header />
        
        {/* Main Content */}
        <main className="p-6">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-medium text-gray-800">Students</h1>
            <div className="flex items-center space-x-4">
              <Button
                variant="secondary"
                onClick={handleExport}
                icon="/images/img_frame_5.svg"
              >
                Export
              </Button>
              <Button
                variant="primary"
                onClick={handleAddUser}
                icon="/images/img_frame_white_a700.svg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Add User
              </Button>
            </div>
          </div>

          {/* Students Table Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Search and Filters */}
            <div className="p-4 border-b border-purple-50">
              <div className="flex items-center justify-between">
                <div className="flex-1 max-w-md">
                  <InputField
                    type="text"
                    placeholder="Search by Name, ID, Organization..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    icon="/images/img_icon_magnifyingglass.svg"
                    className="bg-purple-50 border-purple-100"
                  />
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <Button
                    variant="ghost"
                    icon="/images/img_frame_6.svg"
                    className="bg-purple-50 text-gray-600"
                  >
                    Filter
                  </Button>
                  <Button
                    variant="ghost"
                    icon="/images/img_frame_7.svg"
                    className="bg-purple-50 text-gray-600"
                  >
                    {selectedDateRange}
                  </Button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-50">
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Name</th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Email</th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Organization</th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Role</th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Last Login</th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Status</th>
                    <th className="text-left py-4 px-4 text-xs font-medium text-gray-800 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsData.map((student, index) => (
                    <tr key={student.id} className="border-b border-purple-50 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="w-9 h-9 rounded-full mr-3"
                          />
                          <div>
                            <div className="text-xs font-medium text-gray-800">{student.name}</div>
                            <div className="text-xs text-gray-500">{student.userId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-xs text-gray-600">{student.email}</td>
                      <td className="py-4 px-4 text-xs text-gray-600">{student.organization}</td>
                      <td className="py-4 px-4 text-xs text-gray-600">{student.role}</td>
                      <td className="py-4 px-4 text-xs text-gray-600">{student.lastLogin}</td>
                      <td className="py-4 px-4">{getStatusBadge(student.status)}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleViewStudent(student.id)}
                            className="p-1 hover:bg-blue-50 rounded transition-colors"
                          >
                            <img
                              src="/images/img_frame_indigo_50.svg"
                              alt="View"
                              className="w-6 h-6"
                            />
                          </button>
                          <button
                            onClick={() => handleEditStudent(student.id)}
                            className="p-1 hover:bg-green-50 rounded transition-colors"
                          >
                            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                              <img
                                src="/images/img_vector_green_a700.svg"
                                alt="Edit"
                                className="w-3 h-3"
                              />
                            </div>
                          </button>
                          <button
                            onClick={() => handleDeleteStudent(student.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                          >
                            <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                              <img
                                src="/images/img_vector_red_500.svg"
                                alt="Delete"
                                className="w-4 h-3"
                              />
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-purple-50">
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                className="justify-end"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;