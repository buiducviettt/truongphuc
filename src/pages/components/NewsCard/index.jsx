/* eslint-disable react/prop-types */
const NewsCard = ({ image, date, title, desc }) => {
  return (
    <div className="news_card">
      <div className="inner">
        <div className="card_img">
          <img src={image} alt="" />
        </div>
        <p style={{ color: '#00439D' }}>{date}</p>
        <p
          className="title"
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </p>
        <p
          style={{
            overflow: 'hidden',
            color: '#737373',
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};
export default NewsCard;
