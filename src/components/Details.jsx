import { useState, useEffect } from 'react';
import jobs from '../Data';

function Details() {
  const [jobIndex, setJobIndex] = useState(0);
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    const currentJob = jobs[jobIndex];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < currentJob.length) {
        setJobTitle(currentJob.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setJobIndex((jobIndex + 1) % jobs.length);
        }, 1000); // wait for 1 second before moving to next job
      }
    }, 100); // set the typing speed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [jobIndex]);

  return (
    <div className="details">
      <div>
        <h1 className="name">Hi I'm Tharusha <br/>Gunawardane</h1>
        <p className="job">Hi I'm a {jobTitle}</p>
      </div>
    </div>
  );
}

export default Details;
