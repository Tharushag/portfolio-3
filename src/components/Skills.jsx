import { skills } from "../Data";

function Skills() {
  function createList(name, index) {
    return <li className="regular-para" key={index}>{name}</li>
  }
  
  return (
    <div className="skill-wrapper">
      <div className="skill-box">
        <ul>
          <li className="heading regular-para">Languages</li>
          { skills.languages.map(createList) }
        </ul>

        <ul>
          <li className="heading regular-para">Libraries</li>
          { skills.libraries.map(createList) }
        </ul>

        <ul>
          <li className="heading regular-para">Tools</li>
          { skills.tools.map(createList) }
        </ul>

        <ul>
          <li className="heading regular-para">Design</li>
          { skills.design.map(createList) }
        </ul>

        <p className="non-draggable">
          const somethinf if (it did happen) [then what qwe evdd]; <br />
          consg wewe = [wrve, rbet, tr] <br /> <br />
          wtbr = dvdf;

          for (adfs=0e; rebtg-0; e++) [
            fewver__
            esr rd r = b 
            rret
          ] <br />

          ertbtr();
          retbr() -e rerb;
          retrynn = rdf;

          const somethinf if (it did happen) [then what qwe evdd]; <br />
          consg wewe = [wrve, rbet, tr] <br /> <br />
          wtbr = dvdf;

          for (adfs=0e; rebtg-0; e++) [
            fewver__
            esr rd r = b 
            rret
          ] <br />

          ertbtr();
          retbr() --e rerb;
          retrynn = rdf;

          const somethinf if (it did happen) [then what qwe evdd]; <br />
          consg wewe = [wrve, rbet, tr] <br /> <br />
          wtbr = dvdf;

          for (adfs=0e; rebtg-0; e++) [
            fewver__
            esr rd r = b 
            rret
          ] <br />

          const somethinf if (it did happen) [then what qwe evdd]; <br />
          consg wewe = [wrve, rbet, tr] <br /> <br />
          wtbr = dvdf;

          for (adfs=0e; rebtg-0; e++) [
            fewver__
            esr rd r = b 
            rret
          ] <br />
        </p>
      </div>
    </div>
  );
}

export default Skills;
