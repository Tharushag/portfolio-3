import myPic from '../images/me.jpg';

function Me() {
  return (
    <div className="me-box">
      <div className="overlay-wrapper">
        <div className="secondary-overlay">
          <div className="primary-overlay">
            <img src={myPic} alt="Tharusha" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
