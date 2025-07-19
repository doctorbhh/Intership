import React, { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, Strikethrough } from 'lucide-react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RichTextEditor = ({ value, onChange, placeholder, rows = 4 }) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    if (onChange) {
      onChange(editorRef.current?.innerHTML || '');
    }
  };

  const handleInput = () => {
    if (onChange && editorRef.current) {
      onChange(editorRef.current.innerHTML || '');
    }
  };

  const formatButtons = [
    { command: 'bold', icon: Bold, title: 'Bold' },
    { command: 'italic', icon: Italic, title: 'Italic' },
    { command: 'underline', icon: Underline, title: 'Underline' },
    { command: 'strikeThrough', icon: Strikethrough, title: 'Strikethrough' },
    { command: 'insertUnorderedList', icon: List, title: 'Bullet List' },
    { command: 'insertOrderedList', icon: ListOrdered, title: 'Numbered List' },
  ];

  return (
    <div className="border rounded" style={{ minHeight: `${rows * 1.5}rem` }}>
      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #ccc;
          font-style: italic;
        }
        [contenteditable]:focus:before {
          content: none;
        }
      `}</style>
      <div
        ref={editorRef}
        contentEditable
        className="p-3"
        style={{
          minHeight: `${rows * 1.5}rem`,
          outline: 'none',
          lineHeight: '1.5',
          direction: 'ltr',
        }}
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        data-placeholder={placeholder}
      />
      <div className="border-bottom p-2 bg-light d-flex gap-1">
        {formatButtons.map(({ command, icon: Icon, title }) => (
          <button
            key={command}
            type="button"
            className="btn btn-sm btn-outline-secondary p-1"
            title={title}
            onClick={() => executeCommand(command)}
            style={{ width: '32px', height: '32px' }}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
    </div>
  );
};

const AddCourses = () => {
  const [sectionDescription, setSectionDescription] = useState('');
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [coverFile, setCoverFile] = useState(null);
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false); // State for live modal
  const [showBadgeModal, setShowBadgeModal] = useState(false); // State for badge modal
  const [showCertificateModal, setShowCertificateModal] = useState(false); // State for certificate modal
  const [selectedCategory, setSelectedCategory] = useState('Multimedia'); // Default category
  const [selectedActivity, setSelectedActivity] = useState(''); // Track selected activity
  const [liveTitle, setLiveTitle] = useState(''); // State for live section title
  const [liveLink, setLiveLink] = useState(''); // State for meeting link
  const [badgeTitle, setBadgeTitle] = useState(''); // State for badge title
  const [certificateTitle, setCertificateTitle] = useState(''); // State for certificate title
  const [badgeDescription, setBadgeDescription] = useState(''); // State for badge description
  const [certificateDescription, setCertificateDescription] = useState(''); // State for certificate description
  const [signatureFile, setSignatureFile] = useState(null); // State for signature file

  const handleSidebarToggle = (minimized) => setIsSidebarMinimized(minimized);
  const handleGoBack = () => navigate(-1);

  const handleFileChange = (e) => {
    setCoverFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Course added!');
    navigate('/courses');
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory('Multimedia'); // Reset to default category on close
  };

  const handleShowLiveModal = (activity) => {
    setSelectedActivity(activity);
    setShowLiveModal(true);
  };

  const handleCloseLiveModal = () => {
    setShowLiveModal(false);
    setLiveTitle('');
    setLiveLink('');
  };

  const handleAddLiveSection = () => {
    if (liveTitle && liveLink) {
      console.log(`Added Live Section: ${selectedActivity}, Title: ${liveTitle}, Link: ${liveLink}`);
      handleCloseLiveModal();
      setShowModal(true); // Return to the first modal
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleShowBadgeModal = (activity) => {
    setSelectedActivity(activity);
    setShowBadgeModal(true);
  };

  const handleCloseBadgeModal = () => {
    setShowBadgeModal(false);
    setBadgeTitle('');
    setBadgeDescription('');
    setSignatureFile(null);
  };

  const handleAddBadge = () => {
    if (badgeTitle && badgeDescription) {
      console.log(`Added ${selectedActivity}: Title: ${badgeTitle}, Description: ${badgeDescription}`);
      handleCloseBadgeModal();
      setShowModal(true); // Return to the first modal
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleShowCertificateModal = (activity) => {
    setSelectedActivity(activity);
    setShowCertificateModal(true);
  };

  const handleCloseCertificateModal = () => {
    setShowCertificateModal(false);
    setCertificateTitle('');
    setCertificateDescription('');
    setSignatureFile(null);
  };

  const handleAddCertificate = () => {
    if (certificateTitle && certificateDescription && signatureFile) {
      console.log(`Added ${selectedActivity}: Title: ${certificateTitle}, Description: ${certificateDescription}, Signature: ${signatureFile.name}`);
      handleCloseCertificateModal();
      setShowModal(true); // Return to the first modal
    } else {
      alert('Please fill all fields and upload a signature.');
    }
  };

  const handleSignatureUpload = (e) => {
    setSignatureFile(e.target.files[0]);
  };

  // Define activity options with Bootstrap icons based on selected category
  const getActivityOptions = () => {
    switch (selectedCategory) {
      case 'Live Sessions':
        return [
          { label: 'Zoom Meeting', icon: 'bi-camera-video' },
          { label: 'Teams', icon: 'bi-people' },
          { label: 'Google Meet', icon: 'bi-camera-video' },
        ];
      case 'Multimedia':
        return [
          { label: 'Add Video', icon: 'bi-play-circle' },
          { label: 'Add Pdf/Word', icon: 'bi-file-earmark-text' },
          { label: 'Add Presentation', icon: 'bi-easel' },
          { label: 'Add Audio', icon: 'bi-volume-up' },
          { label: 'Add Youtube', icon: 'bi-youtube' },
        ];
      case 'Assignment/Quiz':
        return [
          { label: 'Assignment', icon: 'bi-file-earmark-text' },
          { label: 'Quiz', icon: 'bi-question-circle' },
        ];
      case 'Badge/Certificate':
        return [
          { label: 'Badge', icon: 'bi-award' },
          { label: 'Certificate', icon: 'bi-card-text' },
        ];
    }
  };

  const handleActivitySelect = (label) => {
    if (selectedCategory === 'Live Sessions' && ['Zoom Meeting', 'Teams', 'Google Meet'].includes(label)) {
      handleShowLiveModal(label); // Open live modal
    } else if (selectedCategory === 'Badge/Certificate' && ['Badge'].includes(label)) {
      handleShowBadgeModal(label); // Open badge modal
    } else if (selectedCategory === 'Badge/Certificate' && ['Certificate'].includes(label)) {
      handleShowCertificateModal(label); // Open certificate modal
    } else {
      console.log(`Selected activity: ${label}`);
      handleCloseModal();
      // Add your logic here for other activities
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar activeItem="Courses" onToggle={handleSidebarToggle} />
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
            <h5>Add Course</h5>
            <button className="btn btn-primary bg-primary-purple" onClick={handleGoBack}>
              <i className="bi bi-arrow-left" /> Go back
            </button>
          </div>
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
            <h4 className="mb-4">Basic Information *</h4>

            {/* Cover Upload */}
            <div className="d-flex align-items-center mb-4 gap-3">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{ width: '60px', height: '60px', background: '#eee' }}
              >
                <i className="bi bi-camera-fill fs-4 text-muted"></i>
              </div>
              <div className="flex-grow-1">
                <p className="mb-1 small text-muted">We only support .JPG, .JPEG, .PNG, .MP4, .MP3, or .WAV files.</p>
                <div className="d-flex gap-3">
                  <label className="btn btn-primary btn-sm">
                    Upload Cover Image/Video
                    <input
                      type="file"
                      className="d-none"
                      onChange={handleFileChange}
                      accept="image/*,video/*,audio/*"
                    />
                  </label>
                  {coverFile && (
                    <button type="button" className="btn btn-link text-danger p-0" onClick={() => setCoverFile(null)}>
                      Delete Image
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Course details */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Course Type *</label>
                <select className="form-select" required>
                  <option value="">Course Type</option>
                  <option>Self-paced</option>
                  <option>Instructor-led</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Course Title *</label>
                <input className="form-control" placeholder="Course title" required />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category *</label>
                <select className="form-select" required>
                  <option value="">Category</option>
                  <option>Technology & IT</option>
                  <option>Business</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Tags</label>
                <input className="form-control" placeholder="Tags" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Difficulty Level *</label>
                <select className="form-select" required>
                  <option value="">Difficulty level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Estimated Duration *</label>
                <div className="input-group">
                  <input className="form-control" placeholder="Estimated duration" required />
                  <span className="input-group-text">Hours</span>
                </div>
              </div>

              <div className="col-12 mb-4">
                <label className="form-label">Description *</label>
                <RichTextEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Description"
                  rows={6}
                />
              </div>
            </div>

            {/* Section 01 */}
            <h5 className="mt-4 mb-3">Section 01</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Title *</label>
                <input className="form-control" placeholder="Title" required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Estimated Duration *</label>
                <div className="input-group">
                  <input className="form-control" placeholder="Estimated duration" required />
                  <span className="input-group-text">Hours</span>
                </div>
              </div>
              <div className="col-12 mb-4">
                <label className="form-label">Description *</label>
                <RichTextEditor
                  value={sectionDescription}
                  onChange={setSectionDescription}
                  placeholder="Description"
                  rows={4}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between mb-4">
              <button type="button" className="btn btn-primary" onClick={handleShowModal}>
                Add Activity
              </button>
              <button type="button" className="btn btn-outline-secondary">Add Section</button>
            </div>

            {/* Access Limit */}
            <h5 className="mb-3">Access Limit *</h5>
            <div className="mb-4">
              <label className="form-label">Access by *</label>
              <select className="form-select" required>
                <option value="">Select Access</option>
                <option>Free (Open to all)</option>
                <option>Paid (Restricted)</option>
              </select>
            </div>

            <div className="d-flex gap-3 mt-3">
              <button type="button" className="btn btn-outline-danger">Discard</button>
              <button type="submit" className="btn btn-primary text-white">Add</button>
            </div>
          </form>

          {/* First Modal for Adding Activity */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
              <Modal.Title>Add Activity</Modal.Title>
              <button type="button" className="btn-close" onClick={handleCloseModal}></button>
            </Modal.Header>
            <Modal.Body className="d-flex" style={{ height: 'calc(529px - 56px)', overflowY: 'auto' }}>
              {/* Sidebar with categories */}
              <div className="flex-shrink-0 w-25 p-3 bg-light" style={{ minHeight: '100%', maxHeight: '529px' }}>
                
                <ul className="list-unstyled mb-0">
                  {['Multimedia', 'Live Sessions', 'Assignment/Quiz', 'Badge/Certificate'].map((category) => (
                    <li
                      key={category}
                      className={`py-2 px-3 rounded mb-1 fw-semibold text-secondary ${selectedCategory === category ? 'bg-primary text-white' : ''}`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center grid for activity options */}
              <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', maxHeight: '473px' }}>
                <div className="d-grid" style={{ gridTemplateColumns: 'repeat(4, 125px)', gap: '20px', justifyContent: 'center' }}>
                  {getActivityOptions().map(({ label, icon }) => (
                    <div
                      key={label}
                      className="d-flex flex-column align-items-center justify-content-center p-3 rounded"
                      style={{ width: '125px', height: '125px', backgroundColor: '#FCF7FF' }}
                      onClick={() => handleActivitySelect(label)}
                    >
                      <i className={`${icon} text-primary`} style={{ fontSize: '48px', lineHeight: '81px' }} />
                      <span className="fw-semibold text-center" style={{ marginTop: '5px' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* Second Modal for Adding Live Section */}
          <Modal show={showLiveModal} onHide={handleCloseLiveModal} centered>
            <Modal.Header>
              <Modal.Title>Add Live Section</Modal.Title>
              <button type="button" className="btn-close" onClick={handleCloseLiveModal}></button>
            </Modal.Header>
            <Modal.Body style={{ height: 'calc(529px - 56px)', overflowY: 'auto', padding: '20px' }}>
              <form>
                <div className="mb-3">
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={liveTitle}
                    onChange={(e) => setLiveTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Meeting Link *</label>
                  <input
                    type="url"
                    className="form-control"
                    value={liveLink}
                    onChange={(e) => setLiveLink(e.target.value)}
                    placeholder="Enter meeting link"
                    required
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseLiveModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddLiveSection}>
                Add Live Section
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Third Modal for Adding Badge */}
          <Modal show={showBadgeModal} onHide={handleCloseBadgeModal} centered>
            <Modal.Header>
              <Modal.Title>Add Badge</Modal.Title>
              <button type="button" className="btn-close" onClick={handleCloseBadgeModal}></button>
            </Modal.Header>
            <Modal.Body style={{ height: 'calc(529px - 56px)', overflowY: 'auto', padding: '20px' }}>
              <form>
                <div className="mb-3">
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={badgeTitle}
                    onChange={(e) => setBadgeTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <RichTextEditor
                    value={badgeDescription}
                    onChange={setBadgeDescription}
                    placeholder="Enter description"
                    rows={9}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseBadgeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddBadge}>
                Add Badge
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Fourth Modal for Adding Certificate */}
          <Modal show={showCertificateModal} onHide={handleCloseCertificateModal} centered>
            <Modal.Header>
              <Modal.Title>Add Certificate</Modal.Title>
              <button type="button" className="btn-close" onClick={handleCloseCertificateModal}></button>
            </Modal.Header>
            <Modal.Body style={{ height: 'calc(529px - 56px)', overflowY: 'auto', padding: '20px' }}>
              <form>
                <div className="mb-3">
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={certificateTitle}
                    onChange={(e) => setCertificateTitle(e.target.value)}
                    placeholder="Enter title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <RichTextEditor
                    value={certificateDescription}
                    onChange={setCertificateDescription}
                    placeholder="Enter description"
                    rows={9}
                  />
                </div>
                <div className="mb-3">
                  <label className="btn btn-upload btn-sm">
                    Upload signature
                    <input
                      type="file"
                      className="d-none"
                      onChange={handleFileChange}
                      accept="image/"
                    />
                  </label>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCertificateModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddCertificate}>
                Add Certificate
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
      </div>
    </div>
  );
};

export default AddCourses;