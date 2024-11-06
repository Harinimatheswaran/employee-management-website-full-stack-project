import React, { useState } from 'react';
import './FormPage.css';
import axios from 'axios';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    gender: '',
    dob: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    startDate: '',
    employeeId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData); // Log form data
  
    try {
      const response = await axios.post('http://localhost:5000/api/employees', formData);

      console.log('Response:', response); // Log response for debugging
      if (response.status === 201) {
        alert('Employee Details Submitted!');
        setFormData({
          name: '',
          designation: '',
          employeeId: '',
          gender: '',
          dob: '',
          age: '',
          email: '',
          phone: '',
          address: '',
          department: '',
          startDate: '',
          
        });
      }
    } catch (error) {
      console.error('Error submitting employee data:', error.response ? error.response.data : error.message);
      alert(`Failed to submit employee data: ${error.response ? error.response.data.message : error.message}`);
    }
  };
  
  

  return (
    <div className="form-page-container">
      <h1 className="form-page-title">Employee Details Form</h1>
      <form className="form-page-form" onSubmit={handleSubmit}>
        <div className="form-page-group">
          <label className="form-page-label">Name:</label>
          <input
            className="form-page-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Designation:</label>
          <input
            className="form-page-input"
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Employee ID:</label>
          <input
            className="form-page-input"
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Department:</label>
          <input
            className="form-page-input"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Gender:</label>
          <select
            className="form-page-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Date of Birth:</label>
          <input
            className="form-page-input"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Age:</label>
          <input
            className="form-page-input"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Email:</label>
          <input
            className="form-page-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Phone Number:</label>
          <input
            className="form-page-input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Address:</label>
          <textarea
            className="form-page-textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-page-group">
          <label className="form-page-label">Start Date:</label>
          <input
            className="form-page-input"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <button className="form-page-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
