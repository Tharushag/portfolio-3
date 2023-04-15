import Navbar from './Navbar';
import Me from './Me';
import Story from './Story';
import Skills from './Skills';
import Title from './Title';
import Education from './Education';
import { education, certifications } from '../Data';

function About() {
  function createEducation(item, index) {
    return <Education key={index} data={item} />;
  }

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
        
        <div className="education">
          <Title title="Education" />
          { education.map(createEducation) }
        </div>

        <div className="certifications">
          <Title title="Certifications" />
          { certifications.map(createEducation) }
        </div>
      </section>
    </>
  );
}

export default About;
