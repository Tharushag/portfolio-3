function Education(props) {
  const { data } = props;

  return (
    <div className="info">
      <div className="info-title">
        <h2 className="regular-para">{data.title}</h2>
        <p>{data.date}</p>
      </div>
      <p className="info-para regular-para">{data.university}</p>
    </div>
  );
}

export default Education;
