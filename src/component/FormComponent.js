// src/FormComponent.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormComponent.css'; 

const FormComponent = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    eventName: '',
    department: '',
    year: '',
    eventType: '',
    participantDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder='Student name'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder='Event name'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <select
            className="form-select"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics and Communication</option>
            <option value="IT">Information Technology</option>
            <option value="AI">Artificial Intelligence</option>
            <option value="AIDS">Artificial Intelligence and Data Science</option>
            <option value="IOT">Internet of Things (IOT)</option>
            <option value="Mech">Mechanical</option>
            
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="year1"
              name="year"
              value="1st"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year1">
              1st Year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="year2"
              name="year"
              value="2nd"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year2">
              2nd Year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="year3"
              name="year"
              value="3rd"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year3">
              3rd Year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="year4"
              name="year"
              value="4th"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="year4">
              4th Year
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="eventType" className="form-label">
            Event Type
          </label>
          <select
            className="form-select"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
          >
            <option value="">Select Event Type</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Cultural">Cultural Event</option>
            <option value="Technical">Technical Event</option>
            <option value="Academic">Academic Competition</option>
            <option value="Sports">Sports Event</option>
            
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="participantDate" className="form-label">
            Participant Date
          </label>
          <input
            type="date"
            className="form-control"
            id="participantDate"
            name="participantDate"
            value={formData.participantDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
