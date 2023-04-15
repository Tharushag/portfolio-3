import Navbar from './Navbar';
import Me from './Me';
import Story from './Story';
import Skills from './Skills';
import Education from './Education';
import Certifications from './Certifications';

function About() {
  return (
    <>
      <section id="landing-page" className="about-me">
        <Navbar page="about" />
        <div className="story-box">
          <Story />
          <Me />
        </div>
      </section>
      <section id="about">
        <Skills />
        <Education />
        <Certifications />
      </section>
    </>
  );
}

export default About;
