import React, { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, Strikethrough } from 'lucide-react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import { useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



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





const PostAnnouncement = () => {
  const navigate = useNavigate();
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audience, setAudience] = useState('');
  const [visibilityRange, setVisibilityRange] = useState([null, null]);
  const [startDate, endDate] = visibilityRange;

  const [priorityLevel, setPriorityLevel] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSidebarToggle = (minimized) => setIsSidebarMinimized(minimized);
  const handleGoBack = () => navigate(-1);

  const handleAttachmentUpload = (e) => setAttachment(e.target.files[0]);

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
        alert("Please select both start and end dates");
        return;
    }
    alert('Announcement Posted!');
    console.log({
        title,
        description,
        audience,
        visibility: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
        priorityLevel,
        attachment
    });
    navigate('/announcements');
    };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar activeItem="Announcements" onToggle={handleSidebarToggle} />
      <div className="flex-grow-1">
        <Header />
        <main
          className="p-4"
          style={{
            marginLeft: isSidebarMinimized ? '96px' : '256px',
            transition: 'margin-left 0.3s',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5>Post Announcement</h5>
            <button className="btn btn-primary bg-primary-purple" onClick={handleGoBack}>
              <i className="bi bi-arrow-left" /> Go back
            </button>
          </div>

          <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
            {/* Title */}
            <div className="mb-3">
              <label className="form-label">Title *</label>
              <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="form-label">Description</label>
              <RichTextEditor
                value={description}
                onChange={setDescription}
                placeholder="Description"
                rows={6}
              />
            </div>

            {/* Audience */}
            <div className="mb-3">
              <label className="form-label">Audience *</label>
              <select
                className="form-select"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}
              >
                <option value="">Select Audience</option>
                <option value="Organization & Instructor">Organization & Instructor</option>
                <option value="All Students">All Students</option>
                
              </select >
            </div>

            {/* Visibility Date */}
            <div className="mb-3">
              <label className="form-label">Visibility Dates (from - to) *</label>
              <div className="input-group">
                <DatePicker
                  selectsRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => setVisibilityRange(update)}
                  isClearable
                  placeholderText="Visibility date"
                  className="form-control"
                  dateFormat="MM/dd/yyyy"
                />
                <span className="input-group-text">
                  <i className="bi bi-calendar" />
                </span>
              </div>
            </div>



             
            {/* Priority Level */}
            <div className="mb-3">
              <label className="form-label">Priority Level *</label>
              <select
                className="form-select"
                value={priorityLevel}
                onChange={(e) => setPriorityLevel(e.target.value)}
                required style={{ fontStyle: 'italic' ,fontFamily:'Inter'}}
              >
                <option value="">Select priority</option>
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            {/* Attachment */}
            <div className="mb-4">
              <label className="form-label">Add Attachment</label>
              <div>
                <label className="btn btn-outline-primary btn-sm">
                  Add attachment
                  <input type="file" className="d-none" onChange={handleAttachmentUpload} />
                </label>
                {attachment && (
                  <span className="ms-3 text-muted small">{attachment.name}</span>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <button type="button" className="btn btn-outline-danger">Discard</button>
              <button type="submit" className="btn btn-primary">Post/Schedule</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default PostAnnouncement;
