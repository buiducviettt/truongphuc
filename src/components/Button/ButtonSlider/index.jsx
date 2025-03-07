import Images from '../../../assets/image/Images';
import './btn_slider.scss';
const ButtonSlider = ({ onNext, onPrev }) => {
  return (
    <div className="btn_slider">
      <button className="btn --second btn_prev" onClick={onPrev}>
        <img src={Images.arrow} alt="slider" />
      </button>
      <button className="btn --second btn_next" onClick={onNext}>
        <img src={Images.arrow} alt="slider" />
      </button>
    </div>
  );
};
export default ButtonSlider;
