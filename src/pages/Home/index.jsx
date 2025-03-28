/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import DefaultLayout from '../../layouts/Default Layout';
import { useEffect, useRef, useState } from 'react';
import '../components/styles/home.scss';
import Images from '../../assets/image/Images';
import { getDataHome, getDataService, getDataPost } from '../../assets/api/api';
import Button from '../../components/Button';
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import CardItem from '../components/CardItem';
import Faq from 'react-faq-component';
import Reviews from '../../components/Reviews';
import ButtonSlider from '../../components/Button/ButtonSlider';
import NewsCard from '../components/NewsCard';
import Footer from '../../layouts/Default Layout/Footer';
import FormContact from '../components/FormContact';
import Cloud from '../../components/Cloud';
import IntroWrapper from '../components/IntroWrapper';
import IntroGalerry from '../components/IntroWrapper/IntroGallery';
import ReasonWrapper from '../components/Reasons';
import Partner from '../../components/Partner';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const swiperRef = useRef();
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
  const [dataHome, setDataHome] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mainImage, setMainImage] = useState('');
  const [dataService, setDataService] = useState(null);
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const fetchDataPost = async () => {
      const data = await getDataPost();
      if (data) {
        setDataPost(data);
      }
    };
    fetchDataPost();
  }, []);

  useEffect(() => {
    // 1️⃣ Fetch data trước để đảm bảo có dữ liệu trước khi dùng
    const fetchData = async () => {
      const data = await getDataHome();
      if (data) {
        setDataHome(data);
        // lấy ảnh banner
        if (data.banner_section && data.banner_section.image) {
          const firstImage = data.banner_section.image[0];
          setMainImage(firstImage.sizes?.large || firstImage.url);
        }
      }
    };
    fetchData();
  }, []);
  // lấy danh mục dịch vụ
  useEffect(() => {
    const fetchService = async () => {
      const data = await getDataService();
      if (data) {
        setDataService(data);
      }
    };
    fetchService();
  }, []);

  if (!dataHome) return null;
  if (!dataService) return null;
  if (!dataPost) return null;
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

  const handleNavigation = (id) => {
    navigate(`/news/${id}`);
  };
  return (
    <DefaultLayout>
      <div className="homepage">
        <div className="home_wrapper">
          <div className="home_inner">
            <div className="home_banner">
              <img src={mainImage} alt="" />
              <div className="banner_overlay"></div>
              <div className="container">
                <div className="home_banner_content" data-aos="fade-up">
                  <h1 className="banner_title text-white" data-aos="fade-up">
                    {dataHome.banner_section.title}
                  </h1>
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
                {dataHome?.banner_section.image?.map((img, index) => (
                  <img
                    key={index}
                    className="img_wrapper"
                    src={img.sizes?.medium}
                    alt=""
                    onClick={() => setMainImage(img.size?.large || img.url)}
                  />
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
                  {/* Section dịch vụ */}
                  <div className="sec_gap services_section">
                    <Cloud />

                    <div className="container">
                      <div className="inner">
                        <div
                          className="service_header d-flex flex-column justify-content-center"
                          data-aos="fade-up"
                        >
                          <h2 className="text-white title text-center">
                            Dịch vụ mà{' '}
                            <span className="is_highlight">
                              chúng tôi cung cấp
                            </span>
                          </h2>
                          <p className="desc text-white text-justify">
                            {dataHome.featured_services.desc}
                          </p>
                        </div>
                        <div className="service_body">
                          <div className="services_list">
                            {isMobile ? (
                              <Swiper
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                  delay: 0, // Thời gian giữa mỗi slide (3s)
                                  disableOnInteraction: false, // Không dừng khi người dùng tương tác
                                }}
                                freeMode={true}
                                speed={7000} // Tốc độ chuyển slide (1s)
                                modules={[Autoplay]} // Thêm module autoplay
                                slidesPerView={1}
                                spaceBetween={20}
                              >
                                {dataService.map((service, index) => (
                                  <SwiperSlide key={index}>
                                    <div className="service_info">
                                      <div className="inner">
                                        <h2 className="text-white">
                                          {service.title.rendered}
                                        </h2>
                                        <p className="text-white">
                                          {service.acf.short_desc}
                                        </p>
                                        <Button
                                          className="seemore_btn"
                                          title="Tìm hiểu thêm"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className="service_img"
                                      style={{ width: '50rem' }}
                                    >
                                      <img
                                        src={service.acf.category_image?.url}
                                        alt=""
                                      />
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            ) : (
                              <>
                                {dataService.map((service, index) => (
                                  <div
                                    key={index}
                                    className="row row_services"
                                    data-aos="fade-up"
                                  >
                                    {' '}
                                    <div className="service_info_wrapper col col-12 col-md-6">
                                      <div className="service_info">
                                        <div className="inner">
                                          <h2 className="text-white">
                                            {service.title.rendered}
                                          </h2>
                                          <p className="text-white">
                                            {service.acf.short_desc}
                                          </p>
                                          <Button
                                            className="seemore_btn"
                                            title="Tìm hiểu thêm"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col col-12 col-md-6">
                                      <div className="service_img">
                                        <img
                                          src={service.acf.category_image?.url}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <IntroWrapper />
                </div>
                <IntroGalerry />
                <ReasonWrapper />
                <Partner />

                {/* Section FAQ */}
                <div className="sec_gap faq_section" data-aos="fade-up">
                  <div className="container">
                    <div className="inner">
                      <div className="row">
                        <div className="col col-12 col-md-6">
                          <div className="faq_title">
                            <h2 className="title text-white">
                              Có câu hỏi? <br></br>
                              <span className="is_highlight">
                                {' '}
                                Chúng tôi sẵn sàng trả lời!
                              </span>
                            </h2>
                            <p className="desc text-white">
                              Everything you need to know about the product and
                              billing.
                            </p>
                            <Button title="Liên hệ" className="contact_btn" />
                          </div>
                        </div>
                        <div className="col col-12 col-md-6">
                          <Faq className="faq_table" data={data} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section Reviews */}
                <div className="sec_gap review_section" data-aos="fade-up">
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
                <div className="sec_gap news_section" data-aos="fade-up">
                  <div className="inner">
                    <div className="container">
                      <div className="news_header d-flex align-items-center justify-content-between">
                        <h2 className="title text-white">
                          Tin tức{' '}
                          <span className="is_highlight">truyền thông</span>
                        </h2>
                        <div
                          className="news_cta d-flex"
                          style={{ gap: '1rem' }}
                        >
                          <div className="slider_btn">
                            <ButtonSlider
                              onPrev={() => swiperRef.current?.slidePrev()}
                              onNext={() => swiperRef.current?.slideNext()}
                            />
                          </div>
                          <Button
                            title="Tất cả dịch vụ"
                            className="seemore_btn"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="news_body">
                      <div className="swiper_container">
                        <Swiper
                          breakpoints={{
                            0: {
                              slidesPerView: 1.5,
                            },
                            768: {
                              slidesPerView: 3,
                            },
                            1200: {
                              slidesPerView: 4.5,
                            },
                          }}
                          modules={[Navigation]}
                          centeredSlides={true}
                          spaceBetween={20}
                          slidesPerView={4.5}
                          loop={true}
                          onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                          {dataPost.slice(0, 5).map((post, index) => (
                            <SwiperSlide key={index}>
                              <NewsCard
                                onCLick={() => {
                                  handleNavigation(post.id);
                                }}
                                key={index}
                                image={post.acf?.thumb_img?.url}
                                date={post.date}
                                title={post.title?.rendered}
                                desc={post.acf?.short_description}
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section form */}
                <div className=" bg_footer">
                  <div className="sec_gap form_section">
                    <FormContact />
                  </div>

                  {/* Footer */}
                  <Footer />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Home;
