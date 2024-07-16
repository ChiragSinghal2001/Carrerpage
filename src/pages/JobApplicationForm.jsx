import React, { useState, useEffect } from 'react';
import './JobApplicationForm.css';
import { useLocation } from 'react-router-dom';

import { useJobContext } from '../JobContext.jsx';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function JobApplicationForm() {
  const navigate = useNavigate(); 
  const { jobDetails } = useJobContext(); // Fetch jobDetails from the context
  const location = useLocation();
  const jobID = location.pathname.split('/').pop();
  const [captcha, setCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [details, setDetails] = useState('');
   // const { jobID } = useParams(); 
   console.log("jobID",jobID);

  const [formData, setFormData] = useState({
    resume: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
    experienceYears: '',
    experienceMonths: '',
    currentSalary: '',
    expectedSalary: '',
    availableToJoin: '',
    currentLocation: '',
    notes: '',
    wfo: '',
    linkedin: '',
    portfolio: '',
    github: '',
    consent: false,
  });

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== captcha) {
      setCaptchaError('Incorrect captcha. Please try again.');
      setCaptcha(generateCaptcha());
    } else {
      setCaptchaError('');
      console.log('Form submitted:', formData);
      // Handle form submission logic here
    }
  };

  useEffect(() => {
    // Check if jobDetails is an array before using find method
    console.log("idhar")
    if (Array.isArray(jobDetails)) {
      console.log("array ke andar");
        const selectedJob = jobDetails.find(job => job.jobid === parseInt(jobID));
        if (selectedJob) {
          console.log("idhar selectedJob",selectedJob);
            setDetails(selectedJob);
        }
    }
}, [jobID, jobDetails]);

console.log("Details:", details);
  return (
    <div className="form-container">
      <button onClick={() => navigate('/career')} className="back-button"><span style={{ marginLeft: '5px' }}>&larr;</span>Back to all job openings</button>
      <h1>{details?.title}</h1> 
      <p>Fulltime - {details?.city} - {details?.experience}</p>
      <h3>Apply for this job</h3>
      <form className="job-application-form" onSubmit={handleSubmit}>
        <div className="form-group full-width">
          <label htmlFor="resume" className="upload-label">Upload resume</label>
          <input
            type="text"
            id="resume"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            placeholder="Upload your resume"
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobilePhone">Mobile Phone *</label>
          <input
            type="tel"
            id="mobilePhone"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            required
            placeholder="9894795499"
          />
        </div>

        <div className="form-group experience-group">
          <label>Experience</label>
          <div className="experience-input">
            <input
              type="number"
              id="experienceYears"
              name="experienceYears"
              placeholder="Years"
              value={formData.experienceYears}
              onChange={handleChange}
            />
            <input
              type="number"
              id="experienceMonths"
              name="experienceMonths"
              placeholder="Months"
              value={formData.experienceMonths}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="currentSalary">Current Salary(LPA)</label>
          <input
            type="text"
            id="currentSalary"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            placeholder="2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expectedSalary">Expected Salary(LPA)</label>
          <input
            type="text"
            id="expectedSalary"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            placeholder="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="availableToJoin">Available To Join (in days)</label>
          <input
            type="number"
            id="availableToJoin"
            name="availableToJoin"
            value={formData.availableToJoin}
            onChange={handleChange}
            placeholder="7"
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentLocation">Current Location</label>
          <input
            type="text"
            id="currentLocation"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            placeholder="Aligarh"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Enter any additional notes"
          ></textarea>
        </div>

        <div className="form-group full-width">
          <label>Ready to WFO *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="wfo"
                value="yes"
                checked={formData.wfo === 'yes'}
                onChange={handleChange}
                required
                className="white-radio"
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="wfo"
                value="no"
                checked={formData.wfo === 'no'}
                onChange={handleChange}
                required
                className="white-radio"
              /> No
            </label>
          </div>
        </div>

        <div className="form-group full-width captcha-group">
          <label htmlFor="captcha" className="captcha-label">Captcha: <span className="captcha-box">{captcha}</span></label>
          <div className="captcha-input-group">
            <input
              type="text"
              id="captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              className="captcha-input"
            />
            <button type="button" onClick={() => setCaptcha(generateCaptcha())} className="regenerate-captcha-button">
              ↻ Regenerate Captcha
            </button>
          </div>
          {captchaError && <p className="error">{captchaError}</p>}
        </div>

        <div className="form-group full-width consent-group">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <label htmlFor="consent" className="consent-label">
            By applying you hereby accept the data processing terms under the Privacy Policy and give consent to processing of the data as part of this job application.
          </label>
        </div>

        <button type="submit" className="apply-now">Apply Now</button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
