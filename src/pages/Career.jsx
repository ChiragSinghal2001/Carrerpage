import React, { useState } from 'react';
import JobCard from './JobCard';
import JobApplicationForm from './JobApplicationForm';
import "./CareersPage.css";
import { useJobContext } from '../JobContext.jsx';
import { useLocation } from 'react-router-dom';


const CareersPage = () => {
  const { jobDetails } = useJobContext();
  const [selectedJobId, setSelectedJobId] = useState(null);

  

  return (
  <div className="careers-page">
    <h1 style={{color:'black'}}>Open positions</h1>
    <div className="categories">
      {console.log("jobDetails",jobDetails)}
      {Array.isArray(jobDetails) && jobDetails.map((job, index) => (
        <JobCard key={index} job={job} onApply={() => setSelectedJobId(job.jobid)} />
      ))}
    </div>
  </div>
  );
};

export default CareersPage;
