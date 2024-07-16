import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CareersPage from './pages/Career.jsx';
import JobApplicationForm from './pages/JobApplicationForm.jsx';
import { JobProvider } from './JobContext.jsx'; 

function App() {
  return (
    <Router>
      <JobProvider>
        <Routes>
          <Route path="/career/:jobid" element={<JobApplicationForm />} />
          <Route path="/career" element={<CareersPage />} />
        </Routes>
      </JobProvider>
    </Router>
  );
}

export default App;
