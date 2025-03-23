import Cloud from '../../../components/Cloud';
import Typewriter from 'typewriter-effect';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDataHome } from '../../../assets/api/api';
import CardItem from '../CardItem';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import '../styles/components.scss';
import { Autoplay, Pagination } from 'swiper/modules';
const ReasonWrapper = () => {
  const [dataHome, setDataHome] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    // 1️⃣ Fetch data trước để đảm bảo có dữ liệu trước khi dùng
    const fetchData = async () => {
      const data = await getDataHome();
      console.log('dataHome:', data); // Check dữ liệu trả về
      if (data) {
        setDataHome(data);
        // lấy ảnh banner
      }
    };
    fetchData();
  }, []);
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
    <div className="reason_wrapper" data-aos="fade-up">
      <Cloud />
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
                  deleteSpeed: Infinity,
                }}
              />
            </h2>
            <div className="btn_cta">
              <Button title="Xem thêm" className="seemore_btn" />
            </div>
          </div>
          <div className="reason_body pt-5" data-aos="fade-up">
            {isMobile ? (
              <Swiper
                centeredSlides={true}
                loop={true}
                speed={5000} // Tốc độ cuộn (5s)
                autoplay={{
                  delay: 3000, // Dừng 3s mỗi slide
                  disableOnInteraction: false, // Không dừng khi user tương tác
                }}
                modules={[Autoplay, Pagination]} // Fix lỗi module
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {dataHome?.reason_home?.map((reason, index) => (
                  <SwiperSlide key={index}>
                    <CardItem
                      img={reason.img?.url}
                      title={reason.title}
                      desc={reason.short_desc}
                      icon={reason.icon.url}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="row">
                {dataHome?.reason_home?.map((reason, index) => (
                  <div key={index} className="col col-12 col-md-4">
                    <CardItem
                      img={reason.img?.url}
                      title={reason.title}
                      desc={reason.short_desc}
                      icon={reason.icon.url}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReasonWrapper;
