import React, { useState } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import { useNavigate } from 'react-router-dom';

const AddInstructors = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [orgType, setOrgType] = useState('');
  const navigate = useNavigate();

  const handleSidebarToggle = (minimized) => setIsSidebarMinimized(minimized);
  const handleGoBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Instructor added!');
    navigate('/addinstructors');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar activeItem="instructors" onToggle={handleSidebarToggle} />
      <div className="flex-grow-1">
        <Header />
        <main
          className="p-4"
          style={{
            marginLeft: isSidebarMinimized ? '96px' : '256px',
            transition: 'margin-left 0.3s',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Add Instructor</h4>
            <button className="btn btn-primary bg-primary-purple" onClick={handleGoBack}>
              <i className="bi bi-arrow-left" /> Go back
            </button>
          </div>

          <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
            <h5 className="mb-4">General Information</h5>

            {/* Upload */}
            <div className="d-flex align-items-start mb-4 gap-4 flex-wrap">
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: '#eee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="bi bi-camera-fill fs-4 text-muted"></i>
              </div>

              <div className="d-flex flex-column">
                <small className="text-muted mb-2">We only support .JPG, .JPEG, or .PNG file.</small>
                <div className="d-flex align-items-center gap-3">
                  <button type="button" className="btn btn-primary bg-primary-purple text-white">
                    Upload Photo
                  </button>
                  <button type="button" className="btn btn-link text-danger p-0">Delete Photo</button>
                </div>
              </div>
            </div>

            {/* Name & Contact */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name *</label>
                <input className="form-control" placeholder="First Name" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name *</label>
                <input className="form-control" placeholder="Last Name" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Email *</label>
                <input type="email" className="form-control" placeholder="Email" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number *</label>
                <input className="form-control" placeholder="Phone Number" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth *</label>
                <input type="date" className="form-control" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="col-md-6 mb-3">
                <label className="form-label">Address *</label>
                <input className="form-control" placeholder="Address" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              
            </div>

            {/* Instructor Information */}
            <div className="row">
                <h5 className="mt-4 mb-3">Instructor Information</h5>
                <div className="col-md-6 mb-3">
                <label className="form-label">Organization Type *</label>
                <select
                    className="form-select"
                    
                    
                    required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}
                >
                    <option value="">Select</option>
                    <option value="School">School</option>
                    <option value="College">College</option>
                    <option value="Other">Other Institute</option>
                </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Organization Name *</label>
                    <input className="form-control" placeholder="Organization Name" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">ID no. *</label>
                    <input className="form-control" placeholder="ID no" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Account Status *</label>
                    <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                    <option value="">Select Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Suspended</option>
                    </select>
                </div>
            </div>    
            <div className="d-flex gap-3 mt-4">
              <button type="button" className="btn btn-outline-danger">Discard</button>
              <button type="submit" className="btn btn-primary bg-primary-purple text-white">Add</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddInstructors;
