import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Details from './Details';
import Showcase from './Showcase';
import arrow from '../icons/right-arrow.png'

function Work() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
    <section id="landing-page">
      <Navbar page="work" />
      <Details />
      <a href={scrollPosition > 32 ? "#landing-page" : "#work"}>
        <img 
          style={scrollPosition > 32 ? {transform: "rotate(-90deg)"} : {transform: "rotate(90deg)"}}
          className="arrow non-draggable" 
          src={arrow} 
          alt="arrow"
        />
      </a>
    </section>

    <section id="work">
      <Showcase />
    </section>
    </>
  );
}

export default Work
