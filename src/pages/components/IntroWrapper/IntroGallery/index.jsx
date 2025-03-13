import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Images from '../../../../assets/image/Images';
import 'swiper/css';
import '../../styles/components.scss';
const IntroGalerry = () => {
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
  return (
    <div className="home_intro_gallery">
      <div className="swiper_container">
        <Swiper
          className="swiper swiper_gallery"
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0, // Thời gian giữa mỗi slide (3s)
            disableOnInteraction: false, // Không dừng khi người dùng tương tác
          }}
          freeMode={true}
          speed={5000} // Tốc độ chuyển slide (1s)
          modules={[Autoplay]} // Thêm module autoplay
          breakpoints={{
            0: { slidesPerView: 1.5 }, // Mobile (0px - 767px)
            768: { slidesPerView: 2.5 }, // Tablet (768px - 1023px)
            1024: { slidesPerView: 4.5 }, // PC (>= 1024px)
          }}
        >
          {slider_home.map((slider) => (
            <SwiperSlide key={slider.id}>
              {/* layout ảnh lớn */}
              {slider.type === 'single' ? (
                <div className="slider_large">
                  <img src={slider.image} alt="" className="image_large" />
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
    </div>
  );
};
export default IntroGalerry;
