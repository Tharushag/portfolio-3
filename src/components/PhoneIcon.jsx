import { useEffect, useState, useRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
import phoneImg from '../icons/phone-call.png';

function PhoneIcon() {
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


  return (
    <Tooltip title="+94 755 589 085" ref={phoneRef} placement="top" open={click} onClick={() => {setClick(!click)}}>
      <img className="non-draggable" src={phoneImg} alt="phone" />
    </Tooltip>
  );
}

export default PhoneIcon;
