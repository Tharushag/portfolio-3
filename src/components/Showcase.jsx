import share from '../icons/share.png'
import memento1 from "../images/memento-1.png"
import memento2 from "../images/memento-2.png"
import memento3 from "../images/memento-3.png"

function Showcase(props) {
  return (
    <div className="showcase">
      <div className="showcase-info">
        <a href="https://memento-hqc5.onrender.com" target="_blank" rel="noreferrer" className="title"><img src={share} alt="share-icon" /> Memento</a>
        <p>A to-do list web app that can help individuals manage their tasks. Create tasks, add deadlines and view your tasks in a calendar.</p>

        <ul>
          <li>Flask</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Figma</li>
        </ul>
      </div>
      <div className="img-container">
        <img src={memento1} />
        <img src={memento2} />
        <img src={memento3} />
      </div>
    </div>
  );
}

export default Showcase;
