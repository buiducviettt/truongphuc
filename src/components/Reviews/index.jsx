const Reviews = ({ logo, desc, name }) => {
  return (
    <div className="review_box">
      <div className="inner">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="content text-center text-white">{desc}</p>
        <p className="name text-white">{name}</p>
      </div>
    </div>
  );
};
export default Reviews;
