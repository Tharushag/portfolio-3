import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Details from './Details';
import Showcase from './Showcase';
import Project from './Projects';
import arrow from '../icons/right-arrow.png'
import { projects } from '../Data';

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

  function createProject(item, index) {
    return <Project key={index} data={item} />;
  }

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

      <div className="project-box">
        <div className="project-row">
          {projects.map(createProject)}
        </div>
      </div>
    </section>
    </>
  );
}

export default Work
