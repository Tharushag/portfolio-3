function Link(props) {
  const  { href, text } = props; 

  return (
    <div className="link-wrapper">
      <div className="link-box">
        <a className="contact-link regular-para" href={ href } target="_blank" rel="noreferrer">{ text }</a>
      </div>
    </div>
  );
}

export default Link;
