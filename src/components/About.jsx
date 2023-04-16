import Education from './Education';
import { education, certifications } from '../Data';
import Footer from './Footer';
import Navbar from './Navbar';
import Me from './Me';
import Story from './Story';
import Skills from './Skills';
import Title from './Title';

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

      <Footer />
    </>
  );
}

export default About;
