import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';
import OverviewChart from '../../components/OverviewChart';
import RevenueSummaryChart from '../../components/RevenueSummaryChart';


const LMSDashboard = () => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const handleSidebarToggle = (minimized) => setIsSidebarMinimized(minimized);

  const metrics = [
  {
    label: 'Total Students',
    value: 75260,
    change: '+4.26%',
    icon: '/images/profile.svg',
    changeColor: 'text-success',
  },
  {
    label: 'Total Organizations',
    value: 534,
    change: '-1.5%',
    icon: '/images/icon_organizations.svg',
    changeColor: 'text-danger',
  },
  {
    label: 'Total Instructors',
    value: 1256,
    change: '+0.7%',
    icon: '/images/icon_instructors.svg',
    changeColor: 'text-success',
  },
  {
    label: 'Total Courses',
    value: 23964,
    change: '+0.7%',
    icon: '/images/icon_courses.svg',
    changeColor: 'text-success',
  },
];




  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar activeItem="Dashboard" onToggle={handleSidebarToggle} />
      <div className="flex-grow-1">
        <Header />
        <main
          className="p-4"
          style={{ marginLeft: isSidebarMinimized ? '96px' : '256px', transition: 'margin-left 0.3s' }}
        >
          
          <div className="d-flex flex-wrap gap-4 mb-4">
            {/* Welcome Box */}
            <div
              style={{
                width: '999px',
                height: '201px',
                borderRadius: '5px',
                background: 'linear-gradient(272.49deg, #FFFFFF 0.42%, #DE8EE2 100%)',
              }}
              className="p-4 text-dark shadow-sm d-flex justify-content-between align-items-center"
            >
              {/* Left: Greeting */}
              <div>
                <h2 className="fw-bold mb-2">
                  Welcome back, 
                </h2>
                <p className="txt-white">John</p>
              </div>

              {/* Right: Stats */}
              <div className="text-end">
                <p className="mb-1">
                  Last login: <strong className="text-primary">June 5, 2025 at 10:25 AM</strong>
                </p>
                <p className="mb-1">
                  Platform Uptime: <strong className="text-primary">99.98%</strong>
                </p>
                <p className="mb-0">
                  Active Sessions: <strong className="text-primary">124</strong>
                </p>
              </div>
            </div>


            {/* Profile Card */}
            <div
              style={{
                width: '201px',
                height: '201px',
                borderRadius: '5px',
                backgroundColor: '#fff',
              }}
              className="shadow-sm d-flex flex-column align-items-center justify-content-center text-center p-3"
            >
              <img
                src="/images/img_frame_5518_4.png" 
                alt="Profile"
                className="rounded-circle mb-2"
                style={{ width: '64px', height: '64px', objectFit: 'cover' }}
              />
              <div className="fw-semibold">John Michael</div>
              <small className="text-muted mb-2">johnmichael@sample.com</small>
              <a href="#" className="text-primary text-decoration-none fw-semibold small">
                View Profile
              </a>
            </div>

          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            {metrics.map((item, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-start">
                      <h6 className="text-muted mt-2">{item.label}</h6>
                      <span className={`fw-semibold ${item.changeColor}`}>{item.change}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-start">
                      <img src={item.icon} alt={item.label} style={{ width: '45px', height: '45px' }} />
                      <h4 className="fw-bold">{item.value.toLocaleString()}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

            
           
            <div className="d-flex flex-wrap gap-4 mb-4">
              {/* Overview Card */}
              <div
                className="shadow-sm"
                style={{
                  width: '429px',
                  height: '342px',
                  borderRadius: '5px',
                  padding: '15px 21px',
                  backgroundColor: '#fff',
                }}
              >
                <h6 className="fw-semibold mb-3">Overview</h6>
                <OverviewChart />
              </div>

              {/* Revenue Summary */}
              <div
                className="shadow-sm"
                style={{
                  width: '499px',
                  height: '342px',
                  borderRadius: '5px',
                  padding: '24px',
                  backgroundColor: '#fff',
                  minWidth: '320px',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-semibold mb-0">Revenue Summary</h6>
                  <button className="btn btn-sm btn-outline-light text-secondary">
                    Yearly <i className="bi bi-chevron-down ms-1" />
                  </button>
                </div>
                <div style={{ height: '240px' }}>
                  <RevenueSummaryChart />
                </div>
              </div>

              {/* Total Revenue Section */}
              <div
                className="d-flex flex-column justify-content-between"
                style={{
                  width: '168px',
                  height: '342px',
                  gap: '20px',
                }}
              >
                {/* Total Revenue */}
                <div className="card shadow-sm p-3">
                  <h6 className="fw-semibold text-secondary mb-1">Total Revenue</h6>
                  <p className="fw-bold text-primary fs-5 mb-0">$6,582,648</p>
                </div>

                {/* 2025 Revenue */}
                <div className="card shadow-sm p-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="fw-semibold text-secondary mb-0">2025</h6>
                    <i className="bi bi-chevron-down text-secondary small" />
                  </div>
                  <p className="fw-bold text-primary mb-0">$82,648</p>
                </div>

                {/* May Revenue */}
                <div className="card shadow-sm p-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="fw-semibold text-secondary mb-0">May</h6>
                    <i className="bi bi-chevron-down text-secondary small" />
                  </div>
                  <p className="fw-bold text-primary mb-0">$8,648</p>
                </div>
              </div>
            </div>



        </main>
      </div>
    </div>
  );
};

export default LMSDashboard;