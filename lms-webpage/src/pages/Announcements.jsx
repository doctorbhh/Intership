import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Pagination from '../components/ui/Pagination';
import { useNavigate } from 'react-router-dom';


const Announcements = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('May 01 - May 11');
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false); // Track sidebar state

  const AnnouncementsData = [
    { title: 'New Features Added to the LMS', audience: 'Organization & Instructor',date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Normal'   ,status: 'Scheduled',},
    { title: 'New Features Added to the LMS',  audience: 'John@example.com',        date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Important',status: 'Expired',},
    { title: 'Ben Tension',  audience: 'John@example.com',                          date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Critical' ,status: 'Scheduled',},
    { title: 'Mary Rawan Rose',  audience: 'John@example.com',                      date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Important',status: 'Published',},
    { title: 'John',  audience: 'John@example.com',                                 date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Normal'   ,status: 'Expired',},
    { title: 'Jude Mariyah',  audience: 'John@example.com',                         date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Important',status: 'Published',},
    { title: 'Ben Tension',  audience: 'John@example.com',                          date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Critical' ,status: 'Scheduled',},
    { title: 'John',  audience: 'John@example.com',                                 date_created:'12/06/2025',start_and_end_date:'17/06/2025 - 02/07/2025',priority_level:'Important',status: 'Published',},
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
  const handleAddUser = () => { navigate('/postannouncements'); };
  const handleViewStudent = (id) => { console.log(`View ${id}`); alert(`View ${id}`); };
  const handleEditStudent = (id) => { console.log(`Edit ${id}`); alert(`Edit ${id}`); };
  const handleDeleteStudent = (id) => { if (confirm(`Delete ${id}?`)) alert(`Deleted ${id}`); };

  const getStatusBadge = (status) => {
    const statusClasses = {
      Published: 'bg-status-active text-status-active',
      Scheduled: 'bg-status-inactive text-status-inactive',
      Expired: 'bg-status-suspended text-status-suspended',
    };
    return <span className={`badge rounded-pill ${statusClasses[status]}`}>{status}</span>;
  };

    const getPriorityBadge = (priority_level) => {
    const statusClasses = {
      Normal: 'bg-status-active text-status-active',
      Important: 'bg-status-inactive text-status-inactive',
      Critical: 'bg-status-suspended text-status-suspended',
    };
    return <span className={`badge rounded-pill ${statusClasses[priority_level]}`}>{priority_level}</span>;
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
            <h2 className="h4 mb-0 text-secondary-gray">Announcements</h2>
            <div className="d-flex gap-4">
              <button className="btn btn-outline-secondary d-flex align-items-center gap-1" onClick={handleExport}>
                <img src="/images/img_frame_5.svg" alt="Export" className="w-4 h-4" /> Export
              </button>
              <button className="btn btn-primary bg-primary-purple text-primary-white d-flex align-items-center gap-1" onClick={handleAddUser}>
                <img src="/images/img_frame_white_a700.svg" alt="Add" className="w-4 h-4" /> Post Announcements
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
                    <th className="py-2 px-3">Title</th>
                    <th className="py-2 px-3">Audience</th>
                    <th className="py-2 px-3">Date Created</th>
                    
                    <th className="py-2 px-3">Start and End date</th>
                    <th className="py-2 px-3">Priority</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AnnouncementsData.map((announcements) => (
                    <tr key={announcements.id}>
                      <td className="py-2 px-3">
                        <div className="d-flex align-items-center">
                          
                          <div>
                            <div className="text-g">{announcements.title}</div>
                            <small className="text-muted">{announcements.userId}</small>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-3 text-g">{announcements.audience}</td>
                      <td className="py-2 px-3 text-g">{announcements.date_created}</td>
                      
                      <td className="py-2 px-3 text-g">{announcements.start_and_end_date}</td>
                      <td className="py-2 px-3">{getPriorityBadge(announcements.priority_level)}</td>

                      <td className="py-2 px-3">{getStatusBadge(announcements.status)}</td>
                      <td className="py-2 px-3">
                        <div className="d-flex gap-2">
                          <button className="btn p-1" onClick={() => handleViewStudent(announcements.id)}>
                            <img src="/images/img_frame_indigo_50.svg" alt="View" className="w-5 h-5" />
                          </button>
                          <button className="btn p-1" onClick={() => handleEditStudent(announcements.id)}>
                            <img src="/images/img_vector_green_a700.svg" alt="Edit" className="w-4 h-4" />
                          </button>
                          <button className="btn p-1" onClick={() => handleDeleteStudent(announcements.id)}>
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

export default Announcements;