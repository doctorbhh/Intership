import React, { useState } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import { useNavigate } from 'react-router-dom';

const AddOrganization = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const navigate = useNavigate();

  const handleSidebarToggle = (minimized) => setIsSidebarMinimized(minimized);
  const handleGoBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Organization added!');
    navigate('/organizations');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar activeItem="Organizations" onToggle={handleSidebarToggle} />
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
            <h4>Add Organization</h4>
            <button className="btn btn-primary bg-primary-purple" onClick={handleGoBack}>
              <i className="bi bi-arrow-left" /> Go back
            </button>
          </div>

          <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
            {/*BASIC INFORMATION*/}
            <h5 className="mb-4">Basic Information</h5>

            {/* Upload Logo */}
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
                    Upload logo
                  </button>
                  <button type="button" className="btn btn-link text-danger p-0">Delete logo</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Organization Name *</label>
                <input className="form-control" placeholder="Organization Name" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Industry Type *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Industry Type</option>
                  <option>Education</option>
                  <option>Corporate</option>
                  <option>Non-Profit</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Organization Size *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Organization Size</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Country/Region *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Country/Region</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Primary Language *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Primary Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
            </div>

            {/* === ADMIN CONTACT === */}
            <h5 className="my-4">Admin Contact</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Admin First Name *</label>
                <input className="form-control" placeholder="Admin First Name" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Admin Last Name *</label>
                <input className="form-control" placeholder="Admin Last Name" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Admin Email *</label>
                <input type="email" className="form-control" placeholder="Admin Email" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Admin Phone Number *</label>
                <input className="form-control" placeholder="Admin Phone Number" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Admin Role *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Admin Role</option>
                  <option>Super Admin</option>
                  <option>Manager</option>
                  <option>Support</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Account Status *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Account Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Suspended</option>
                </select>
              </div>
            </div>

            {/* === SUBSCRIPTION DETAILS === */}
            <h5 className="my-4">Subscription Details</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Plan Type *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Plan Type</option>
                  <option>Free</option>
                  <option>Basic</option>
                  <option>Premium</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">User Limit *</label>
                <input className="form-control" placeholder="User Limit" required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Subscription Start Date *</label>
                <input type="date" className="form-control" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Subscription End Date *</label>
                <input type="date" className="form-control" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}/>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Storage Limit *</label>
                <select className="form-select" required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}>
                  <option value="">Storage Limit</option>
                  <option>5 GB</option>
                  <option>10 GB</option>
                  <option>Unlimited</option>
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

export default AddOrganization;
