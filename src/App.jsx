import React, { useState } from 'react';
import GetStarted from './GetStartedPage/GetStarted'; // Importing the GetStarted component
import FormPage from './FormFill/FormPage'; // Importing the FormPage component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true); // Update the authentication state
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <GetStarted onAuthSuccess={handleAuthSuccess} />
      ) : (
        <FormPage />
      )}
    </div>
  );
}

export default App;
