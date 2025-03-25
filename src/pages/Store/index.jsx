import DefaultLayout from '../../layouts/Default Layout';
import '../../pages/components/styles/store.scss';
import Banner from '../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormContact from '../components/FormContact';
import Footer from '../../layouts/Default Layout/Footer';
import { getLocation } from '../../assets/api/api';
import { useState, useEffect } from 'react';
import {
  faPhone,
  faLocationCrosshairs,
} from '@fortawesome/free-solid-svg-icons';
const Store = () => {
  const [location, setLocation] = useState(null);
  const [map, setSelectMap] = useState('');
  useEffect(() => {
    const fetchLocation = async () => {
      const response = await getLocation();
      setLocation(response);
      if (response.length > 0) {
        setSelectMap(response[0].acf?.map);
      }
    };
    fetchLocation();
  }, []);
  const handleClick = (map) => {
    setSelectMap(map);
  };
  if (!location) return null;
  return (
    <DefaultLayout>
      <div className="store_page">
        <Banner
          heading="Điểm thu mua kén"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <div className="main">
          <div className="container">
            <div className=" store_lists">
              <div className="row">
                <div className="col col-12 col-md-4 col-lg-4">
                  <ul className="store_branchs">
                    {location.map((item, index) => (
                      <li
                        style={{ cursor: 'pointer' }}
                        className="store_branch"
                        key={index}
                        onClick={() => handleClick(item.acf?.map)}
                      >
                        <p className="title">{item.title?.rendered}</p>
                        <div className="store_info">
                          <div className="info_detail" id="number">
                            <div className="icon">
                              <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <p>{item.acf?.phone}</p>
                          </div>
                          <div className="info_detail" id="location">
                            <div className="icon">
                              <FontAwesomeIcon icon={faLocationCrosshairs} />
                            </div>
                            <p>{item.acf?.location}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col col-12 col-md-8 col-lg-8">
                  {map ? (
                    <div
                      className="google_map"
                      dangerouslySetInnerHTML={{ __html: map }}
                    />
                  ) : (
                    <p style={{ color: 'white', textAlign: 'center' }}>
                      Chọn một địa điểm để xem bản đồ
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
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
export default Store;
