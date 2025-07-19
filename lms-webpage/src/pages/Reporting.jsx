import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Pagination from '../components/ui/Pagination';
import { useNavigate } from 'react-router-dom';
import courses from './Courses';
import { Rocket } from 'lucide-react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; 

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(6);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('May 01 - May 11');
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false); // Track sidebar state
  const [showModal, setShowModal] = useState(false);
 const [selectedReport, setSelectedReport] = useState(null);
 const [selectedStatus, setSelectedStatus] = useState('');


   const [reportingData, setReportingData] = useState([
    {id: 1, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Reviewed',},
    {id: 2, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Pending',},
    {id: 3, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Rejected',},
    {id: 4, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Reviewed',},
    {id: 5, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Pending',},
    {id: 6, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Reviewed',},
    {id: 7, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Rejected',},
    {id: 8, reported_item: 'User: harsh_21',  reported_by: 'Sophia Adams', date_created:'12/06/2025',reason_for:'Inappropriate language',status: 'Pending',},
  ]);

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
  
  
  const handleEditStudent = (id) => { console.log(`Edit ${id}`); alert(`Edit ${id}`); };
  const handleDeleteStudent = (id) => { if (confirm(`Delete ${id}?`)) alert(`Deleted ${id}`); };
    const handleViewStudent = (report) => {
    setSelectedReport(report);
    setSelectedStatus(report.status);
    setShowModal(true);
    };
const handleUpdateStatus = () => {
  if (!selectedReport) return;

  setReportingData((prevData) =>
    prevData.map((report) =>
      report.id === selectedReport.id
        ? { ...report, status: selectedStatus }
        : report
    )
  );
  
  handleClose(); 
};

  


const handleClose = () => {
    setShowModal(false);
    setSelectedReport(null);
};


  const getStatusBadge = (status) => {
    const statusClasses = {
      Reviewed: 'bg-status-active text-status-active',
      Pending: 'bg-status-inactive text-status-inactive',
      Rejected: 'bg-status-suspended text-status-suspended',
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
                    <th className="py-2 px-3">Reported Item</th>
                    <th className="py-2 px-3">Reported by </th>
                    <th className="py-2 px-3">Date & Time</th>
                    
                    <th className="py-2 px-3">Reason for flag</th>
                    
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reportingData.map((report, index) => (
                     <tr key={index}>
                      
                      <td className="py-2 px-3 text-g">{report.reported_item}</td>
                      <td className="py-2 px-3 text-g">{report.reported_by}</td>
                      
                      <td className="py-2 px-3 text-g">{report.date_created}</td>
                      <td className="py-2 px-3 text-g">{report.reason_for}</td>
                      <td className="py-2 px-3">{getStatusBadge(report.status)}</td>
                      <td className="py-2 px-3">
                        <div className="d-flex gap-2">
                          <button className="btn p-1" onClick={() => handleViewStudent(report)}>

                            <img src="/images/img_frame_indigo_50.svg" alt="View" className="w-5 h-5" />
                          </button>
                          <button className="btn p-1" onClick={() => handleEditStudent(report.id)}>
                            <img src="/images/img_vector_green_a700.svg" alt="Edit" className="w-4 h-4" />
                          </button>
                          <button className="btn p-1" onClick={() => handleDeleteStudent(report.id)}>
                            <img src="/images/img_vector_red_500.svg" alt="Delete" className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal */}
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>View Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {selectedReport && (
                <>
                <p><strong>Reported Item:</strong> {selectedReport.reported_item}</p>
                <p><strong>Reported by:</strong> {selectedReport.reported_by}</p>
                <p><strong>Date and Time:</strong> {selectedReport.date_created}</p>
                <p><strong>Reason for flag:</strong> {selectedReport.reason_for}</p>
                <p><strong>Description:</strong><br /> 
                    {/* If you don’t have a description field in your data yet, add a fallback */}
                    {selectedReport.description || 'No description available.'}
                </p>
                <div className="mt-3">
                    <select
                    className="form-select"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                    <option value="Pending">Pending</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Rejected">Rejected</option>
                    </select>
                </div>
                </>
            )}
            </Modal.Body>

            <Modal.Footer>
            <Button variant="primary" onClick={handleUpdateStatus}>
                Update
            </Button>
            </Modal.Footer>

          </Modal>


            <div className="card-footer bg-accent-light p-3 border-0">
              <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} className="justify-content-end" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;