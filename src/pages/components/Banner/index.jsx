/* eslint-disable react/prop-types */
import Images from '../../../assets/image/Images';
import { Parallax } from 'react-parallax';
import Button from '../../../components/Button';
const Banner = ({ heading, desc, dataaos }) => {
  return (
    <section className="banner">
      <div className="overlay"></div>
      <Parallax
        bgImage={Images.bannerhome}
        strength={300}
        style={{ height: 500 }}
      >
        <div className="container" data-aos={dataaos}>
          <div className="banner_content">
            <div className="banner_header text-white">
              <h2>{heading}</h2>
              <p>{desc}</p>
            </div>
            <div className="banner_form">
              <input type="text" placeholder="Nhập email để nhận thông tin" />
              <Button title="Gửi" className="cta_btn" />
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};
export default Banner;
