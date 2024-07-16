import React from 'react';
// ... existing code ...
import { Link } from 'react-router-dom';
import { useJobContext } from '../JobContext.jsx';

const JobCard = ({ job }) => {
  const { setJob } = useJobContext();

  const handleApply = () => {
    setJob(job);
  };
  return (
    <div className="job-card">
      <div className="job-card-header">
        <p className="job-location">{job.country} | {job.city}</p>
        <div className="save-icon">
          <Link to={`/career/${job.jobid}`} className="apply-button"  onClick={handleApply}> {/* Update the Link destination */}
            Apply <span style={{ marginLeft: '5px' }}>&rarr;</span>
          </Link>
        </div>
      </div>
      <h2 className="job-title">{job.title}</h2>
      <p className="job-business-area"><span style={{ color: 'black', fontWeight: '500' }}>Business Area: </span>{job.businessArea}</p>
      <p className="job-experience"><span style={{ color: 'black', fontWeight: '500' }}>Years of Experience: </span>{job.experience}</p>
      <p className="job-business-area"><span style={{ color: 'black', fontWeight: '500' }}>Skills: </span>{job.skills.join(', ')}</p>
      <p className="job-posted">{job.posted}</p>
    </div>
  );
};

export default JobCard;

