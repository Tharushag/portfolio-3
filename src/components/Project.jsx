import share from '../icons/share.png'

function Project(props) {
  function createPara(tag, index) {
    return <p key={index}>{tag}</p>
  }

  return (
    <a className="project" href={props.data.link} target="_blank" rel="noreferrer">
        <div className="project-title">
          <h1>{props.data.title}</h1>
          <img className="non-draggable" src={share} alt="share icon" />
        </div>
        <p className="description">{props.data.description}</p>
        <div className="project-tags">
          {props.data.tags.map(createPara)}
        </div>
    </a>
  );
}

export default Project;
