import Button from '@mui/material/Button';
import Hamburger from './Hamburger';
import { useRef, useState, useEffect } from 'react';
import NavLink from './NavLink';

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

  const pathList = [
    {
      text: "Work",
      link: "/work"
    },
    {
      text: "About",
      link: "/about"
    },
    {
      text: "Message",
      link: "/message-me"
    },
  ];

  function createNavLink(item, index) {
    return <NavLink key={ index } link={ item.link } text={ item.text } />;
  }

  return (
    <nav ref={navRef}>
      <a href="/" className="brand">t.</a>

      <ul style={navOpen ? {height: '16rem'} : {height: '0'}} className={props.page}>
        { pathList.map(createNavLink) }

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
