import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GetStarted from './GetStartedPage/GetStarted';
import FormPage from './FormFill/FormPage';
import AttendancePage from './Attendance/Attendance'; // Fixed the syntax error
import Dashboard from './Dashboard/Dashboard'; // Import the Dashboard component
import Salary from './Salary/Salary'; // Import the Salary component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={!isAuthenticated ? (
              <GetStarted onAuthSuccess={handleAuthSuccess} />
            ) : (
              <Navigate to="/dashboard" replace /> // Redirect to Dashboard after login
            )} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/form" 
            element={isAuthenticated ? <FormPage /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/attendance" 
            element={isAuthenticated ? <AttendancePage /> : <Navigate to="/" replace />} 
          />
          <Route 
            path="/salary" 
            element={isAuthenticated ? <Salary /> : <Navigate to="/" replace />} // Add this line for Salary
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
