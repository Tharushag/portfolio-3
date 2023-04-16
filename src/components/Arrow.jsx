import { useEffect, useState } from 'react';

function Arrow() {
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
    <a href={scrollPosition > 32 ? "#landing-page" : "#work"}>
      <img 
        style={scrollPosition > 32 ? {transform: "rotate(-90deg)"} : {transform: "rotate(90deg)"}}
        className="arrow non-draggable" 
        src={`${[process.env.PUBLIC_URL]}/images/right-arrow.png`} 
        alt="arrow"
      />
    </a>
  );
}

export default Arrow;
