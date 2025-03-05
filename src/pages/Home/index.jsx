/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import DefaultLayout from '../../layouts/Default Layout';
import { useEffect, useState } from 'react';
import BlurText from '../../components/BlurText';
import '../components/styles/home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import Images from '../../assets/image/Images';
import { useInView } from 'react-intersection-observer';
import { getDataHome } from '../../assets/api/api';
import Button from '../../components/Button';
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CardItem from '../components/CardItem';
import Faq from 'react-faq-component';
import Reviews from '../../components/Reviews';

const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const thumbnail = [
    Images.bannerhome,
    Images.thumb3,
    Images.thumb4,
    Images.thumb5,
  ];
  const data = {
    rows: [
      {
        title: 'Làm thế nào để cài đặt?',
        content: 'Chỉ cần chạy npm install react-faq-component.',
      },
      {
        title: 'Thư viện này có hỗ trợ custom giao diện không?',
        content: 'Có, bạn có thể chỉnh sửa CSS theo ý thích.',
      },
      {
        title: 'Thư viện này có hỗ trợ custom giao diện không?',
        content: 'Có, bạn có thể chỉnh sửa CSS theo ý thích.',
      },
      {
        title: 'Thư viện này có hỗ trợ custom giao diện không?',
        content: 'Có, bạn có thể chỉnh sửa CSS theo ý thích.',
      },
    ],
  };
  const partner = [
    {
      id: 1,
      images: `${Images.partner1}`,
    },
    {
      id: 2,
      images: `${Images.partner2}`,
    },
    {
      id: 3,
      images: `${Images.partner3}`,
    },
    {
      id: 4,
      images: `${Images.partner4}`,
    },
    {
      id: 5,
      images: `${Images.partner5}`,
    },
    {
      id: 6,
      images: `${Images.partner6}`,
    },
    {
      id: 7,
      images: `${Images.partner7}`,
    },
  ];
  const slider_home = [
    {
      id: 1,
      type: 'multi',
      images: [`${Images.thumb3}`, ` ${Images.thumb4}`, ` ${Images.thumb4}`],
    },
    { id: 2, type: 'single', image: ` ${Images.thumb4}` },

    {
      id: 3,
      type: 'multi',
      images: [`${Images.thumb4}`, ` ${Images.thumb5}`, ` ${Images.thumb4}`],
    },
    { id: 4, type: 'single', image: ` ${Images.thumb4}` },

    {
      id: 5,
      type: 'multi',
      images: [`${Images.thumb4}`, ` ${Images.thumb5}`, ` ${Images.thumb4}`],
    },
    { id: 6, type: 'single', image: ` ${Images.thumb4}` },
    {
      id: 7,
      type: 'multi',
      images: [`${Images.thumb4}`, ` ${Images.thumb5}`, ` ${Images.thumb4}`],
    },
  ];

  const [dataHome, setDataHome] = useState(null);
  const [mainImage, setMainImage] = useState(thumbnail[0]);
  useEffect(() => {
    // 1️⃣ Fetch data trước để đảm bảo có dữ liệu trước khi dùng
    const fetchData = async () => {
      const data = await getDataHome();
      if (data) {
        setDataHome(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // 2️⃣ Khởi tạo animation AOS
    AOS.init({
      duration: 1500, // Thời gian chạy animation (ms)
      once: 0, // Chỉ chạy một lần khi scroll xuống
    });
  }, []);

  useEffect(() => {
    // 4️⃣ Thiết lập interval thay đổi ảnh
    const interval = setInterval(() => {
      setMainImage((prevImage) => {
        const currentIndex = thumbnail.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % thumbnail.length;
        return thumbnail[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval); // Cleanup khi component unmount
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
              {/* Ảnh chính */}
              <div className="home_intro_wrapper ">
                <div className="container">
                  <div className="home_intro_inner">
                    <div className="intro_content" data-aos="fade-up">
                      <div className="intro_title">
                        <h2 className="text-white text_title text_intro ">
                          {dataHome.home_desc.home_desc_title}
                        </h2>
                      </div>
                      <div className="intro_desc">
                        <div className="right_content ">
                          <p className="text-white">
                            {dataHome.home_desc.home_desc_detail}
                          </p>
                          <div className="box_numbers">
                            {highlight_number.map((number) => (
                              <div
                                key={number.id}
                                className="box_number"
                                ref={ref}
                              >
                                <p className={`text-white number_detail `}>
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
                <div className="home_intro_gallery">
                  <Swiper
                    className="gallery"
                    spaceBetween={20}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                      delay: 0, // Thời gian giữa mỗi slide (3s)
                      disableOnInteraction: false, // Không dừng khi người dùng tương tác
                    }}
                    freeMode={true}
                    speed={5000} // Tốc độ chuyển slide (1s)
                    modules={[Autoplay]} // Thêm module autoplay
                  >
                    {slider_home.map((slider) => (
                      <SwiperSlide key={slider.id}>
                        {/* layout ảnh lớn */}
                        {slider.type === 'single' ? (
                          <div className="slider_large">
                            <img
                              src={slider.image}
                              alt=""
                              className="image_large"
                            />
                          </div>
                        ) : (
                          <div className="slider_grid">
                            {/* {slider.images.map((img, index) => (
                              <img key={index} src={img} alt="" />
                            ))} */}
                            <div className="large">
                              <img src={slider.images[0]} alt="" />
                            </div>
                            <div className="small">
                              <img src={slider.images[1]} alt="" />
                              <img src={slider.images[2]} alt="" />
                            </div>
                          </div>
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="reason_wrapper" data-aos="fade-up">
                  <div className="container">
                    <div className="reason_wrapper_inner">
                      <div className="reason_header">
                        <h2 className="reason_title text-white">
                          <Typewriter
                            options={{
                              strings: ['Vì sao nên chọn NamBanSilk'],
                              autoStart: true,
                              loop: true,
                              delay: 100,
                              deleteSpeed: 100,
                            }}
                          />
                        </h2>
                        <div className="btn_cta">
                          <Button title="Xem thêm" className="seemore_btn" />
                        </div>
                      </div>
                      <div className="reason_body pt-5" data-aos="fade-up">
                        <div className="row">
                          <div className="col col-md-4">
                            <CardItem
                              img={Images.thumb3}
                              title="Thương hiệu uy tín"
                              desc="Lấy chữ TÍN là vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự chính mình."
                            />
                          </div>
                          <div className="col col-md-4">
                            <CardItem
                              img={Images.thumb3}
                              title="Thương hiệu uy tín"
                              desc="Lấy chữ TÍN là vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự chính mình."
                            />
                          </div>
                          <div className="col col-md-4">
                            <CardItem
                              img={Images.thumb3}
                              title="Thương hiệu uy tín"
                              desc="Lấy chữ TÍN là vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự chính mình."
                            />
                          </div>
                          <div className="col col-md-4">
                            <CardItem
                              img={Images.thumb3}
                              title="Thương hiệu uy tín"
                              desc="Lấy chữ TÍN là vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự chính mình."
                            />
                          </div>
                          <div className="col col-md-4">
                            <CardItem
                              img={Images.thumb3}
                              title="Thương hiệu uy tín"
                              desc="Lấy chữ TÍN là vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự chính mình."
                            />
                          </div>
                          <div className="col col-md-4">
                            <CardItem
                              img={Images.thumb3}
                              title="Thương hiệu uy tín"
                              desc="Lấy chữ TÍN là vũ khí cạnh tranh và bảo vệ chữ TÍN như bảo vệ danh dự chính mình."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="partner_section sec_gap" data-aos="fade-up">
                  <div className="inner">
                    <Swiper
                      className="row_1"
                      slidesPerView={5}
                      spaceBetween={24}
                      loop={true}
                      autoplay={{
                        delay: 0, // Thời gian giữa mỗi slide (3s)
                        disableOnInteraction: false, // Không dừng khi người dùng tương tác
                      }}
                      freeMode={true}
                      speed={5000} // Tốc độ chuyển slide (1s)
                      modules={[Autoplay]}
                    >
                      {partner.map((el) => (
                        <SwiperSlide key={el.id}>
                          <div className="logo_img">
                            <img src={el.images} alt="" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={24}
                      loop={true}
                      autoplay={{
                        delay: 0, // Thời gian giữa mỗi slide (3s)
                        disableOnInteraction: false, // Không dừng khi người dùng tương tác
                      }}
                      freeMode={true}
                      speed={5000} // Tốc độ chuyển slide (1s)
                      modules={[Autoplay]}
                      className="row_2"
                      dir="rtl"
                    >
                      {partner.map((el) => (
                        <SwiperSlide key={el.id}>
                          <div className="logo_img">
                            <img src={el.images} alt="" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                {/* Section dịch vụ */}
                <div className="sec_gap services_section" data-aos="fade-up">
                  <div className="container">
                    <div className="inner">
                      <div className="service_header d-flex flex-column justify-content-center">
                        <h2 className="text-white title text-center">
                          Dịch vụ mà chúng tôi cung cấp
                        </h2>
                        <p className="desc text-white text-justify">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat
                        </p>
                      </div>
                      <div className="service_body">
                        <div className="services_list">
                          <div className="row" data-aos="fade-up">
                            <div className="service_info_wrapper col-12 col-md-6">
                              <div className="service_info">
                                <div className="inner">
                                  <h2 className="text-white">
                                    Buôn bán tơ - kén
                                  </h2>
                                  <p className="text-white">
                                    Sợi tơ tằm là nguyên liệu có giá trị và là
                                    được sử dụng chủ yếu trong lĩnh vực may mặc
                                    thời trang sang trọng, cao cấp. Vải lụa tơ
                                    tằm chinh phục được nhiều thị trường khó
                                    tính như Pháp, Italia, Ấn Độ, Nhật Bản
                                  </p>
                                  <Button
                                    className="seemore_btn"
                                    title="Tìm hiểu thêm"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-6">
                              <div className="service_img">
                                <img src={Images.thumb4} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="row" data-aos="fade-up">
                            <div className="col col-md-6">
                              <div className="service_img">
                                <img src={Images.thumb5} alt="" />
                              </div>
                            </div>
                            <div className="service_info_wrapper col-12 col-md-6">
                              <div className="service_info">
                                <div className="inner">
                                  <h2 className="text-white">
                                    Dịch vụ lữ hành
                                  </h2>
                                  <p className="text-white">
                                    Sợi tơ tằm là nguyên liệu có giá trị và là
                                    được sử dụng chủ yếu trong lĩnh vực may mặc
                                    thời trang sang trọng, cao cấp. Vải lụa tơ
                                    tằm chinh phục được nhiều thị trường khó
                                    tính như Pháp, Italia, Ấn Độ, Nhật Bản
                                  </p>
                                  <Button
                                    className="seemore_btn"
                                    title="Tìm hiểu thêm"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row" data-aos="fade-up">
                            <div className="service_info_wrapper col-12 col-md-6">
                              <div className="service_info">
                                <div className="inner">
                                  <h2 className="text-white">
                                    Khách sạn lưu trú
                                  </h2>
                                  <p className="text-white">
                                    Sợi tơ tằm là nguyên liệu có giá trị và là
                                    được sử dụng chủ yếu trong lĩnh vực may mặc
                                    thời trang sang trọng, cao cấp. Vải lụa tơ
                                    tằm chinh phục được nhiều thị trường khó
                                    tính như Pháp, Italia, Ấn Độ, Nhật Bản
                                  </p>
                                  <Button
                                    className="seemore_btn"
                                    title="Tìm hiểu thêm"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col col-md-6">
                              <div className="service_img">
                                <img src={Images.thumb4} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section FAQ */}
                <div className="sec_gap faq_section" data-aos="fade-up">
                  <div className="container">
                    <div className="inner">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <h2 className="title text-white">
                            Có câu hỏi? <br></br>
                            Chúng tôi sẵn sàng trả lời!
                          </h2>
                          <p className="desc text-white">
                            Everything you need to know about the product and
                            billing.
                          </p>
                          <Button title="Liên hệ" className="contact_btn" />
                        </div>
                        <div className="col-12 col-md-6">
                          <Faq className="faq_table" data={data} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section Reviews */}
                <div className="sec-gap review_section" data-aos="fade-up">
                  <div className="container">
                    <div className="inner">
                      <Swiper
                        slidesPerView={1}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{
                          delay: 5000, // Thời gian giữa mỗi slide (3s)
                          disableOnInteraction: false, // Không dừng khi người dùng tương tác
                        }}
                      >
                        <SwiperSlide>
                          <Reviews
                            logo={Images.partner1}
                            desc="The quality of silk and cocoons of Nam Ban Silk really impressed us. We already have 5 orders and will gradually increase them to serve textile factories in the state of Pradesh, India. Surely Nam Ban Silk will be a long-term partner in the future"
                            name="Bùi Đức Việt"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Reviews
                            logo={Images.partner2}
                            desc="The quality of silk and cocoons of Nam Ban Silk really impressed us. We already have 5 orders and will gradually increase them to serve textile factories in the state of Pradesh, India. Surely Nam Ban Silk will be a long-term partner in the future"
                            name="Bùi Đức Việt "
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                {/* Section  news */}
                <div className="sec_gap news_section" data-aos="fade-up"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
