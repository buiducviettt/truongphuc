/* eslint-disable react/prop-types */
import Images from '../../assets/image/Images';
import { Link } from 'react-router-dom';
const Button = ({ title, className, link }) => {
  return (
    <button className={`btn --pri ${className}`}>
      <Link to={link} target="_blank">
        {title}
      </Link>
      <img className="arrow" src={Images.arrow} alt="" />
    </button>
  );
};
export default Button;
