/* eslint-disable no-undef */
import DefaultLayout from '../../layouts/Default Layout';
import { useEffect, useState } from 'react';
import BlurText from '../../components/BlurText';
import '../components/styles/home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Images from '../../assets/image/Images';

import { getDataHome } from '../../assets/api/api';
import Button from '../../components/Button';
const Home = () => {
  const [dataHome, setDataHome] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataHome();
      if (data) {
        setDataHome(data);
      }
    };
    fetchData();
  }, []);
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // Thời gian chạy animation (ms)
      once: true, // Chỉ chạy một lần khi scroll xuống
    });
  }, []);
  if (!dataHome) return <p>Loading...</p>;
  return (
    <DefaultLayout>
      <div className="homepage">
        <div className="home_wrapper">
          <div className="home_inner">
            <div
              className="home_banner"
              style={{
                backgroundImage: `url('${dataHome.banner_section.image}')`, // Đặt ảnh nền cho banner
              }}
            >
              <div className="banner_overlay"></div>
              <div className="container">
                <div className="home_banner_content" data-aos="fade-up">
                  <BlurText
                    text={dataHome.banner_section.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="banner_title text-white"
                  />

                  <p className="text-white ">
                    {dataHome.banner_section.subtitle}
                  </p>
                  <Button
                    title="Tìm hiểu ngay"
                    className="btn_banner"
                    link={dataHome.banner}
                  />
                </div>
              </div>
              <div className="banner_gallery">
                <div className="img_wrapper">
                  <img
                    src={Images.gallery1}
                    alt=""
                    className="banner_gallery_img"
                  />
                </div>
                <div className="img_wrapper">
                  <img
                    src={Images.gallery1}
                    alt=""
                    className="banner_gallery_img"
                  />
                </div>
                <div className="img_wrapper">
                  <img
                    src={Images.gallery1}
                    alt=""
                    className="banner_gallery_img"
                  />
                </div>
                <div className="img_wrapper">
                  <img
                    src={Images.gallery1}
                    alt=""
                    className="banner_gallery_img"
                  />
                </div>
              </div>
            </div>
            <section className="home_intro">
              <div className="home_intro_wrapper">
                <div className="container">
                  <div className="home_intro_inner">
                    <h2 className="text_title text_intro ">Hewllo</h2>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h1>dakjahskjd</h1>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
