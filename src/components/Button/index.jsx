/* eslint-disable react/prop-types */
import Images from '../../assets/image/Images';
import { Link } from 'react-router-dom';

const Button = ({ title, className, onClick, link }) => {
  return link ? (
    <Link to={link} className={`btn --pri ${className}`}>
      {title}
      <img className="arrow" src={Images.arrow} alt="" />
    </Link>
  ) : (
    <button className={`btn --pri ${className}`} onClick={onClick}>
      {title}
      <img className="arrow" src={Images.arrow} alt="" />
    </button>
  );
};

export default Button;
