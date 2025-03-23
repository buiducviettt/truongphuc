/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Images from '../../../assets/image/Images';
const BoxIntro = ({ title, icon, desc }) => {
  return (
    <div className="box_intro">
      <div className="inner">
        <div className="logo">
          <img src={icon} alt="" />
        </div>
        <h1 className="text-white">{title}</h1>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
};
export default BoxIntro;
