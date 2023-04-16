import { jobs } from '../Data';
import { useState, useEffect } from 'react';

function Job() {
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
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [jobIndex]);

  return (
    <p className="job">I'm a {jobTitle} <span className="cursor">I</span></p>
  );
}

export default Job;
