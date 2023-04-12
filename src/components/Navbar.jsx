import {useState} from 'react';
import pdf from '../Tharusha Gunawardane - Resume.pdf';
import Button from '@mui/material/Button';
import Hamburger from './Hamburger';

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);

  function handleClick() {
    setNavOpen(!navOpen);
  }

  return (
    <nav>
      <a href="/" className="brand">t.</a>

      <ul style={navOpen ? {height: '16rem'} : {height: '0'}} className={props.page}>
        <li>
          <a href="/" className="nav-link">Work</a>
        </li>
        <li>
          <a href="/work" className="nav-link">About</a>
        </li>
        <li>
          <a href="/message-me" className="nav-link">Message me</a>
        </li>
        <li>
          <a href={pdf} target="_blank" rel="noreferrer">
            <Button variant="outlined" className="resume-btn">Resume</Button>
          </a>
        </li>
      </ul>

      <Hamburger click={handleClick} />
    </nav>
  );
}

export default Navbar;
