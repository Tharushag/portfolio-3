import Arrow from './Arrow';
import { projects } from '../Data';
import Details from './Details';
import Footer from './Footer';
import Navbar from './Navbar';
import Project from './Project';
import Showcase from './Showcase';

function Work() {
  function createProject(item, index) {
    return <Project key={index} data={item} />;
  }

  return (
    <>
      <section id="landing-page">
        <Navbar page="work" />
        <Details />
        <Arrow />
      </section>

      <section id="work">
        <Showcase />

        <div className="project-box">
          <div className="project-row">
            {projects.map(createProject)}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Work;
