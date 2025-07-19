import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Pagination from '../components/ui/Pagination';
import { useNavigate } from 'react-router-dom';

const instructors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('May 01 - May 11');
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false); // Track sidebar state

  const instructorsData = [
    { id: 1, name: 'John', userId: '#s98765', email: 'John@example.com', no_courses: '10', earnings: '$3450', lastLogin: '12/05/25', status: 'Active', avatar: '/images/img_frame_5518_35x35.png' },
    { id: 2, name: 'Jude Mariyah', userId: '#s987re', email: 'John@example.com', no_courses: '20', earnings: '$3450', lastLogin: '12/05/25', status: 'Inactive', avatar: '/images/img_frame_5518_1.png' },
    { id: 3, name: 'Ben Tension', userId: '#s98455', email: 'John@example.com', no_courses: '24', earnings: '$3450', lastLogin: '12/05/25', status: 'Suspended', avatar: '/images/img_frame_5518_2.png' },
    { id: 4, name: 'Mary Rawan Rose', userId: '#s98765', email: 'John@example.com', no_courses: '42', earnings: '$3450', lastLogin: '12/05/25', status: 'Active', avatar: '/images/img_frame_5518_3.png' },
    { id: 5, name: 'John', userId: '#s98765', email: 'John@example.com', no_courses: '15', earnings: '$3450', lastLogin: '12/05/25', status: 'Inactive', avatar: '/images/img_frame_5518_4.png' },
    { id: 6, name: 'Jude Mariyah', userId: '#s987re', email: 'John@example.com', no_courses: '27', earnings: '$3450', lastLogin: '12/05/25', status: 'Active', avatar: '/images/img_frame_5518_5.png' },
    { id: 7, name: 'Ben Tension', userId: '#s98455', email: 'John@example.com', no_courses: '50', earnings: '$3450', lastLogin: '12/05/25', status: 'Inactive', avatar: '/images/img_frame_5518_6.png' },
    { id: 8, name: 'John', userId: '#s98765', email: 'John@example.com', no_courses: '19', earnings: '$3450', lastLogin: '12/05/25', status: 'Suspended', avatar: '/images/img_frame_5518_7.png' },
  ];

  const filterOptions = [
    { value: 'all', label: 'All Students' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'suspended', label: 'Suspended' },
  ];

  const dateRangeOptions = [
    { value: 'May 01 - May 11', label: 'May 01 - May 11' },
    { value: 'May 12 - May 22', label: 'May 12 - May 22' },
    { value: 'May 23 - May 31', label: 'May 23 - May 31' },
  ];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleFilterChange = (value) => setSelectedFilter(value);
  const handleDateRangeChange = (value) => setSelectedDateRange(value);
  const handleExport = () => { console.log('Exporting...'); alert('Exported!'); };
  const navigate = useNavigate();
  const handleAddUser = () => { navigate('/addinstructors'); };
  const handleViewStudent = (id) => { console.log(`View ${id}`); alert(`View ${id}`); };
  const handleEditStudent = (id) => { console.log(`Edit ${id}`); alert(`Edit ${id}`); };
  const handleDeleteStudent = (id) => { if (confirm(`Delete ${id}?`)) alert(`Deleted ${id}`); };

  const getStatusBadge = (status) => {
    const statusClasses = {
      Active: 'bg-status-active text-status-active',
      Inactive: 'bg-status-inactive text-status-inactive',
      Suspended: 'bg-status-suspended text-status-suspended',
    };
    return <span className={`badge rounded-pill ${statusClasses[status]}`}>{status}</span>;
  };

  // Callback to update sidebar minimized state
  const handleSidebarToggle = (isMinimized) => {
    setIsSidebarMinimized(isMinimized);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className="flex-grow-1">
        <Header />
        <main
            className="p-4"
            style={{
              marginLeft: isSidebarMinimized ? '96px' : '256px',
              transition: 'margin-left 0.3s ease-in-out',
            }}
          >

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0 text-secondary-gray">Instructors</h2>
            <div className="d-flex gap-4">
              <button className="btn btn-outline-secondary d-flex align-items-center gap-1" onClick={handleExport}>
                <img src="/images/img_frame_5.svg" alt="Export" className="w-4 h-4" /> Export
              </button>
              <button className="btn btn-primary bg-primary-purple text-primary-white d-flex align-items-center gap-1" onClick={handleAddUser}>
                <img src="/images/img_frame_white_a700.svg" alt="Add" className="w-4 h-4" /> Add Instructors
              </button>
            </div>
          </div>
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-accent-light p-3 border-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1 me-3">
                  <div className="input-group">
                    <span className="input-group-text bg-accent border-0">
                      <img src="/images/img_icon_magnifyingglass.svg" alt="Search" className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      className="form-control bg-accent border-0"
                      placeholder="Search by Name, ID, Organization..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <div className="dropdown">
                    <button className="btn btn-outline-secondary bg-accent text-secondary-gray d-flex align-items-center gap-1" data-bs-toggle="dropdown">
                      <img src="/images/img_frame_6.svg" alt="Filter" className="w-4 h-4" /> Filter
                    </button>
                    <ul className="dropdown-menu">
                      {filterOptions.map((option) => (
                        <li key={option.value}>
                          <button className="dropdown-item" onClick={() => handleFilterChange(option.value)}>
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-outline-secondary bg-accent text-secondary-gray d-flex align-items-center gap-1" data-bs-toggle="dropdown">
                      <img src="/images/img_frame_7.svg" alt="Date" className="w-4 h-4" /> {selectedDateRange}
                    </button>
                    <ul className="dropdown-menu">
                      {dateRangeOptions.map((option) => (
                        <li key={option.value}>
                          <button className="dropdown-item" onClick={() => handleDateRangeChange(option.value)}>
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr className="txt-gray">
                    <th className="py-2 px-3">Name</th>
                    <th className="py-2 px-3">Email</th>
                    <th className="py-2 px-3">No.of Courses</th>
                    
                    <th className="py-2 px-3">Join Date</th>
                    <th className="py-2 px-3">Earnings</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {instructorsData.map((student) => (
                    <tr key={student.id}>
                      <td className="py-2 px-3">
                        <div className="d-flex align-items-center">
                          <img src={student.avatar} alt={student.name} className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
                          <div>
                            <div className="text-secondary-gray">{student.name}</div>
                            <small className="text-muted">{student.userId}</small>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-3 text-secondary-gray">{student.email}</td>
                      <td className="py-2 px-3 text-secondary-gray">{student.no_courses}</td>
                      
                      <td className="py-2 px-3 text-secondary-gray">{student.lastLogin}</td>
                      <td className="py-2 px-3 text-secondary-gray">{student.earnings}</td>
                      <td className="py-2 px-3">{getStatusBadge(student.status)}</td>
                      <td className="py-2 px-3">
                        <div className="d-flex gap-2">
                          <button className="btn p-1" onClick={() => handleViewStudent(student.id)}>
                            <img src="/images/img_frame_indigo_50.svg" alt="View" className="w-5 h-5" />
                          </button>
                          <button className="btn p-1" onClick={() => handleEditStudent(student.id)}>
                            <img src="/images/img_vector_green_a700.svg" alt="Edit" className="w-4 h-4" />
                          </button>
                          <button className="btn p-1" onClick={() => handleDeleteStudent(student.id)}>
                            <img src="/images/img_vector_red_500.svg" alt="Delete" className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-accent-light p-3 border-0">
              <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} className="justify-content-end" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default instructors;