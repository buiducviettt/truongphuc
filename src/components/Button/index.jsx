/* eslint-disable react/prop-types */
import Images from '../../assets/image/Images';
// import { Link } from 'react-router-dom';
const Button = ({ title, className, onClick }) => {
  return (
    <button className={`btn --pri ${className}`} onClick={onClick}>
      {title}

      <img className="arrow" src={Images.arrow} alt="" />
    </button>
  );
};
export default Button;
