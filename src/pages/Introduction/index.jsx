import DefaultLayout from '../../layouts/Default Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../components/styles/aboutus.scss';
import '../components/styles/home.scss';
import Banner from '../components/Banner';
import IntroWrapper from '../components/IntroWrapper';
import IntroGalerry from '../components/IntroWrapper/IntroGallery';
import { getDataIntro } from '../../assets/api/api';
import { useEffect, useState } from 'react';
import Circle from '../../components/Circle/Circle';
import ReasonWrapper from '../components/Reasons';
import BoxIntro from '../components/BoxIntro';
import Partner from '../../components/Partner';
import FormContact from '../components/FormContact';
import Footer from '../../layouts/Default Layout/Footer';
const Introduction = () => {
  const events = [
    { year: '2020', text: 'Thành lập Công ty Nam Ban Silk' },
    { year: '2021', text: 'Sự kiện 2' },
    { year: '2022', text: 'Sự kiện 3' },
    { year: '2023', text: 'Sự kiện 4' },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataIntro, setDataIntro] = useState([]);
  useEffect(() => {
    const fetchIntro = async () => {
      const data = await getDataIntro();
      if (data) {
        setDataIntro(data);
      }
    };
    fetchIntro();
  }, []);
  if (!dataIntro) return null;

  return (
    <DefaultLayout>
      <div className="aboutus_page">
        <Banner
          dataaos="fade-up"
          heading="Giới thiệu"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <div className="main">
          <section className="intro">
            <div className="container">
              <IntroWrapper />
            </div>
            <IntroGalerry />
          </section>
          <section className="sec_gap value" data-aos="fade-up">
            <div className="container">
              <div className="value_wrapper">
                <div className="title text-white">
                  <h2>{dataIntro.title}</h2>
                </div>
                <div className=" circle_decor" style={{ marginTop: '12rem' }}>
                  <div className="circle_dot">
                    {dataIntro?.center_value?.map((value, index) => (
                      <div className="content text-white" key={index}>
                        <h2>{value.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: value.desc }}></p>
                      </div>
                    ))}
                  </div>
                  {dataIntro?.center_value?.map((value, index) => (
                    <Circle
                      size="large"
                      className="circle_big"
                      key={index}
                      icon={value.icon?.url}
                    />
                  ))}

                  {dataIntro?.value_title?.map((value, index) => (
                    <div key={index} className="value_item">
                      <Circle
                        size="small"
                        title={value.title}
                        icon={value.icon.url}
                        className={`circle_small_${index + 1}`}
                      />{' '}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="reason" data-aos="fade-up">
            <ReasonWrapper />
          </section>
          <section className="leader_content " data-aos="fade-up">
            <div className="container">
              {dataIntro?.leader?.map((value, index) => (
                <div className="inner" key={index}>
                  <div className="leader_content_header text-white">
                    <div className="title ">
                      <h2> {value.title}</h2>
                    </div>
                    <div className="desc">
                      <p dangerouslySetInnerHTML={{ __html: value.desc }}></p>
                    </div>
                  </div>
                  <div className="box_list sec_gap">
                    <div className="row">
                      {value.box_item?.map((value, index) => (
                        <div
                          key={index}
                          className="col col-12 col-md-3 d-flex align-items-stretch"
                        >
                          <BoxIntro
                            title={value.title}
                            icon={value.icon.url}
                            desc={value.desc}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="history text-white">
            <h2 className="text-center">Lịch sử hình thành</h2>
            <div className="timeline">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {dataIntro.timeline_sec?.map((event, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <div className="timeline_item">
                      <div className="inner">
                        <div
                          className={`number ${
                            index <= selectedIndex ? 'active' : ''
                          }`}
                        >
                          {event.year}
                        </div>
                        <div className="text">
                          <h3>{event.title}</h3>
                          <p>{event.desc}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="line"></div>
              <div
                className="line_fill"
                style={{
                  width: `${
                    ((selectedIndex + 0.5) / (events.length - 1)) * 100
                  }%`,
                }}
              ></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            <div className="timeline_content sec_gap">
              <div className="container">
                <div className="row">
                  <div className="service_info_wrapper col col-12 col-md-6">
                    <div className="service_info">
                      <div className="inner">
                        <h2 className="text-white">{dataIntro.story?.title}</h2>
                        <p className="text-white">{dataIntro.story?.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-md-6">
                    <div className="service_img">
                      <img src={dataIntro.story?.img?.url} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="partner sec_gap">
            <Partner />
          </section>
          <section className=" bg_footer">
            <div className="sec_gap form_section">
              <FormContact />
            </div>

            {/* Footer */}
            <Footer />
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Introduction;
