import React, { useState } from 'react';
import axios from 'axios';
import './Attendance.css';

const Attendance = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleCheckIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/attendance/checkin', {
        employeeId: employeeId,
      });
      setCheckInTime(response.data.checkInTime);
      alert('Checked in successfully!');
    } catch (error) {
      console.error('Error during check-in:', error);
      alert('Error during check-in');
    }
  };

  const handleCheckOut = async () => {
    try {
      const response = await axios.post('http://localhost:5000/attendance/checkout', {
        employeeId: employeeId,
      });
      setCheckOutTime(response.data.checkOutTime);
      alert('Checked out successfully!');
    } catch (error) {
      console.error('Error during check-out:', error);
      alert('Error during check-out');
    }
  };

  return (
    <div className="container">
      <h1>Attendance Page</h1>
      <div className="input-group">
        <label htmlFor="employeeId">Employee ID</label>
        <input
          type="text"
          id="employeeId"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter Employee ID"
        />
      </div>
      <div className="button-group">
        <button onClick={handleCheckIn}>Check In</button>
        <button onClick={handleCheckOut}>Check Out</button>
      </div>
      {checkInTime && <p>Check-in Time: {new Date(checkInTime).toLocaleString()}</p>}
      {checkOutTime && <p>Check-out Time: {new Date(checkOutTime).toLocaleString()}</p>}
    </div>
  );
};

export default Attendance;
