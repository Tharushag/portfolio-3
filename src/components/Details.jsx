import { useRef, useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import jobs from '../Data';
import emailImg from '../icons/email.png';
import phoneImg from '../icons/phone-call.png';
import githubImg from '../icons/github.png';
import linkedinImg from '../icons/linkedin.png';

function Details() {
  const [jobIndex, setJobIndex] = useState(0);
  const [jobTitle, setJobTitle] = useState('');
  const [click, setClick] = useState(false);

  const phoneRef = useRef(null);
  useOutsideAlerter(phoneRef, setClick, false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setClick(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }  

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
        <p className="job">I'm a {jobTitle} <span className="cursor">I</span></p>
      </div>

      <hr />

      <div className="text-contact">
        <a className="contact-link regular-para" href="mailto:tharushadgunawardane@gmail.com">tharushadgunawardane@gmail.com</a><br />
        <p className="contact-link regular-para">+94 755 589 085</p>
        <div className="link-wrapper">
          <div className="link-box">
            <a className="contact-link regular-para" href="https://github.com/Tharushag" target="_blank" rel="noreferrer">github.com/Tharushag</a>
          </div>
        </div>
        <div className="link-wrapper">
          <div className="link-box">
            <a className="contact-link regular-para" href="https://www.linkedin.com/in/tharusha-gunawardane-80a014252" target="_blank" rel="noreferrer">linkedin.com/in/tharusha-gunawardane</a>
          </div>
        </div>
      </div>

      <div className="icon-contact">
        <Tooltip title="tharushadgunawardane@gmail.com" placement="top">
          <a href="mailto:tharushadgunawardane@gmail.com"><img className="non-draggable" src={emailImg} alt="email" /></a>
        </Tooltip>
        <Tooltip title="+94 755 589 085" ref={phoneRef} placement="top" open={click} onClick={() => {setClick(!click)}}>
          <img className="non-draggable" src={phoneImg} alt="phone" />
        </Tooltip>
        <Tooltip title="github.com/Tharushag" placement="top">
          <a href="https://github.com/Tharushag"><img className="non-draggable" src={githubImg} alt="github" /></a>
        </Tooltip>
        <Tooltip title="linkedin.com/in/tharusha-gunawardane-80a014252" placement="top">
         <a href="https://www.linkedin.com/in/tharusha-gunawardane-80a014252"><img className="non-draggable" src={linkedinImg} alt="linkedin" /></a>
        </Tooltip>
      </div>
    </div>
  );
}

export default Details;
