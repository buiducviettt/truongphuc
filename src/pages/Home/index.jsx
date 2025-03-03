/* eslint-disable no-undef */
import DefaultLayout from '../../layouts/Default Layout';
import { useEffect, useState } from 'react';
import BlurText from '../../components/BlurText';
import '../components/styles/home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Images from '../../assets/image/Images';
import { useInView } from 'react-intersection-observer';
import { getDataHome } from '../../assets/api/api';
import Button from '../../components/Button';
const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const thumbnail = [
    Images.bannerhome,
    Images.thumb3,
    Images.thumb4,
    Images.thumb5,
  ];
  const [dataHome, setDataHome] = useState(null);
  const [mainImage, setMainImage] = useState(thumbnail[0]);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setMainImage((prevImage) => {
        const currentIndex = thumbnail.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % thumbnail.length;
        return thumbnail[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [thumbnail]);

  if (!dataHome) return <p>Loading...</p>;
  // các câu lệnh phải thực hiện sau dòng !dataHome này
  const highlight_number = [
    {
      number: dataHome.special_number.highlight_number_1,
      content: dataHome.special_number.content_1,
    },
    {
      number: dataHome.special_number.highlight_number_2,
      content: dataHome.special_number.content_2,
    },
  ];

  return (
    <DefaultLayout>
      <div className="homepage">
        <div className="home_wrapper">
          <div className="home_inner">
            <div
              className="home_banner"
              style={{
                backgroundImage: `url(${mainImage})`, // Đặt ảnh nền cho banner
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
                {thumbnail.map((img, index) => (
                  <div className="img_wrapper" key={index}>
                    <img
                      src={img}
                      alt=""
                      className="thumbnail_img"
                      onClick={() => setMainImage(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <section className="home_intro">
              <div className="substract_wrapper">
                <div className="subtract">
                  <img src={Images.subtract} alt="" className="subtract_img" />
                </div>
                <div className="subtract2">
                  <img src={Images.subtract2} alt="" className="subtract_img" />
                </div>
              </div>
              <div className="home_intro_wrapper ">
                <div className="container">
                  <div className="home_intro_inner">
                    <div className="intro_content" data-aos="fade-up">
                      <div className="intro_title">
                        <p className="text-white text_title text_intro ">
                          {dataHome.home_desc.home_desc_title}
                        </p>
                      </div>
                      <div className="intro_desc">
                        <div className="right_content ">
                          <p className="text-white">
                            {dataHome.home_desc.home_desc_detail}
                          </p>
                          <div className="box_numbers">
                            {highlight_number.map((number) => (
                              <div key={number.id} className="box_number">
                                <p
                                  ref={ref}
                                  className={`text-white number_detail `}
                                >
                                  {inView && (
                                    <CountUp
                                      start={0}
                                      end={
                                        number.number === '0'
                                          ? '24/7'
                                          : parseFloat(number.number)
                                      }
                                      duration={3}
                                      separator=","
                                      decimalPlaces={2}
                                    />
                                  )}
                                </p>
                                <p className="text-white">{number.content}</p>
                              </div>
                            ))}
                            <div className="24/7_content">
                              <p className="box_number number_detail">24/7</p>
                              <p className="text-white">
                                {dataHome.special_number.content_3}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section></section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
