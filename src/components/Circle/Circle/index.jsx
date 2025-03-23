import '../../../pages/components/styles/components.scss';
const Circle = ({ size, icon, title, className }) => {
  const circleClass = size === 'large' ? 'circle_large' : 'circle_small';
  return (
    <div className={`${circleClass} ${className}`}>
      <div className="inner">
        <div className="color_wrapper">
          <div className="icon_inner">
            <img src={icon} alt="" className="icon_img" />
          </div>
        </div>
      </div>
      <div className="title text-white">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
export default Circle;
