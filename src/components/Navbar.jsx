import { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Hamburger from './Hamburger';

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);

  const navRef = useRef(null);
  useOutsideAlerter(navRef, setNavOpen, false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNavOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }  

  function handleClick() {
    setNavOpen(!navOpen);
  }

  return (
    <nav ref={navRef}>
      <a href="/" className="brand">t.</a>

      <ul style={navOpen ? {height: '16rem'} : {height: '0'}} className={props.page}>
        <li>
          <a href="/" className="nav-link">Work</a>
        </li>
        <li>
          <a href="/about" className="nav-link">About</a>
        </li>
        <li>
          <a href="/message-me" className="nav-link">Message me</a>
        </li>
        <li>
          <a href={`${[process.env.PUBLIC_URL]}/pdfs/Tharusha Gunawardane - Resume.pdf`} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" className="resume-btn">Resume</Button>
          </a>
        </li>
      </ul>

      <Hamburger click={handleClick} />
    </nav>
  );
}

export default Navbar;
