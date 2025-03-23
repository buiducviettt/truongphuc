import DefaultLayout from '../../layouts/Default Layout';
import Banner from '../components/Banner';
import Button from '../../components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../../pages/components/styles/service.scss';
import { getDataService } from '../../assets/api/api';
import { useState, useEffect } from 'react';
import Cloud from '../../components/Cloud';
import FormContact from '../components/FormContact';
import Footer from '../../layouts/Default Layout/Footer';
import { useNavigate } from 'react-router-dom';
const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dataService, setDataService] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchService = async () => {
      const data = await getDataService();
      if (data) {
        setDataService(data);
      }
    };
    fetchService();
  }, []);
  const handleDetail = (id) => {
    navigate(`/service/${id}`);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <DefaultLayout>
      <div className="service_page">
        <Banner
          dataaos="fade-up"
          heading=" Dịch vụ của chúng tôi"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <section className="main">
          <section className="sec_gap services_section">
            <Cloud />
            <div className="container">
              <div className="inner">
                <div
                  className="service_header d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                >
                  <h2 className="text-white title text-center">
                    Dịch vụ mà{' '}
                    <span className="is_highlight">chúng tôi cung cấp</span>
                  </h2>
                  <p className="desc text-white text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                                  onClick={() => handleDetail(service.id)}
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
                                    onClick={() => handleDetail(service.id)}
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
          </section>
          <section className=" bg_footer">
            <div className="sec_gap form_section">
              <FormContact />
            </div>

            {/* Footer */}
            <Footer />
          </section>
        </section>
      </div>
    </DefaultLayout>
  );
};
export default Service;
