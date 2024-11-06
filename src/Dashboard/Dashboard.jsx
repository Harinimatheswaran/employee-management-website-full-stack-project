import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <nav className="dashboard-nav">
        <Link className="dashboard-button" to="/form">Employee Details</Link>
        <Link className="dashboard-button" to="/attendance">Employee Attendance</Link>
        <Link className="dashboard-button" to="/salary">Employee Salary</Link> {/* Add SalaryPage link when ready */}
      </nav>
    </div>
  );
}

export default Dashboard;
