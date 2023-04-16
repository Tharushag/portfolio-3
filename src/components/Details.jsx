import Job from './Job';
import IconContact from './IconContact';
import TextContact from './TextContact';

function Details() {
  return (
    <div className="details">
      <div>
        <h1 className="name">Hi I'm Tharusha <br/>Gunawardane</h1>
        <Job />
      </div>
      <hr />
      
      <TextContact />
      <IconContact />
    </div>
  );
}

export default Details;
