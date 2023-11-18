import { useState, useEffect } from 'react'
import share from '../icons/share.png'
import memento1 from "../images/memento-1.png"
import memento2 from "../images/memento-2.png"
import memento3 from "../images/memento-3.png"
import cofee1 from "../images/cofee-1.png"
import cofee2 from "../images/cofee-2.png"
import cofee3 from "../images/cofee-3.png"

function Showcase() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

  let condition1 = (scrollPosition > 200) && (scrollPosition < 850);
  let condition2 = (scrollPosition > 670) && (scrollPosition < 1285);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <div className="showcase">
        <div className="showcase-description">
          <a href="https://memento-zy16.onrender.com/" target="_blank" rel="noreferrer" className="title"><img src={share} className="non-draggable" alt="share-icon" /> Memento</a>
          <p>A to-do list web app that can help individuals manage their tasks. Create tasks, add deadlines and view your tasks in a calendar.</p>

          <ul>
            <li>Flask</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className={ condition1 ? "shadow showcase-view": "showcase-view" }>
          <img className={ condition1 ? "img1": "" } src={ memento1 } alt="project Memento" loading="lazy" />
          <img src={ memento2 } alt="project Memento" loading="lazy" />
          <img className={ condition1 ? "img2" : "" } src={ memento3 } alt="project Memento" loading="lazy" />
        </div>
      </div>

      <div className="showcase">
        <div className="showcase-description">
          <a href="https://tharushag.github.io/Coffee-Shop/" target="_blank" rel="noreferrer" className="title"><img src={share} className="non-draggable" alt="share-icon" />Cofee</a>
          <p>A static website for a coffee shop meant to showcase my front-end skills.</p>

          <ul>
            <li>Flask</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className={ condition2 ? "shadow showcase-view": "showcase-view" }>
          <img className={ condition2 ? "img1": "" } src={ cofee1 } alt="project Cofee" loading="lazy" />
          <img src={ cofee2 } alt="project Cofee" loading="lazy" />
          <img className={ condition2 ? "img2" : "" } src={ cofee3 } alt="project Cofee" loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default Showcase;
