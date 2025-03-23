import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../../pages/components/styles/components.scss';
import { useEffect, useState } from 'react';
import { getDataHome } from '../../assets/api/api';
const Partner = () => {
  const [dataHome, setDataHome] = useState(null);
  useEffect(() => {
    // 1️⃣ Fetch data trước để đảm bảo có dữ liệu trước khi dùng
    const fetchData = async () => {
      const data = await getDataHome();
      if (data) {
        setDataHome(data);
        // lấy ảnh banner
      }
    };
    fetchData();
  }, []);
  return (
    <div className="partner_section" data-aos="fade-up">
      <div className="inner">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: '3',
            },
            768: {
              slidesPerView: '4',
            },
            1024: {
              slidesPerView: '5',
            },
          }}
          className="row_1"
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
          {dataHome?.partner?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="logo_img">
                <img src={img.sizes?.thumbnail || img.url} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: '3',
            },
            768: {
              slidesPerView: '4',
            },
            1024: {
              slidesPerView: '5',
            },
          }}
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
          {' '}
          {dataHome?.partner?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="logo_img">
                <img src={img.sizes?.thumbnail || img.url} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Partner;
