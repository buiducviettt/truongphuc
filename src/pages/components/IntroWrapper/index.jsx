import { getDataHome } from '../../../assets/api/api';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../styles/components.scss';
const IntroWrapper = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
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

  const [dataHome, setDataHome] = useState(null);
  if (!dataHome) return null;
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
    <div className="home_intro_inner">
      <div className="intro_content" data-aos="fade-up">
        <div className="intro_title">
          <h2 className="text-white text_title text_intro ">
            {dataHome.home_desc.home_desc_title}
          </h2>
        </div>
        <div className="intro_desc">
          <div className="right_content ">
            <p className="text-white">{dataHome.home_desc.home_desc_detail}</p>
            <div className="box_numbers">
              {highlight_number.map((number) => (
                <div key={number.id} className="box_number" ref={ref}>
                  <div className={`number_detail `}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={parseFloat(number.number)}
                        duration={3}
                        separator=","
                        decimalPlaces={2}
                      />
                    )}
                  </div>
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
  );
};
export default IntroWrapper;
