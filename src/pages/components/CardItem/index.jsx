import '../styles/components.scss';
const CardItem = ({ icon, title, desc, img }) => {
  return (
    <div className="card_item">
      <div className="overlay"></div>
      <div className="image_wrapper">
        <img src={img} alt="" className="img_bg" />
        <div className="card_content">
          <div className="icon">
            <img src={icon} alt={title} className="icon_img" />
          </div>
          <h3 className="text-white title">{title}</h3>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
