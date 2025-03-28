import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataServiceDetails } from '../../assets/api/api';
import DefaultLayout from '../../layouts/Default Layout';
import Banner from '../components/Banner';
import CardItem from '../components/CardItem';
import '../components/styles/service.scss';
import FormContact from '../components/FormContact';
import Footer from '../../layouts/Default Layout/Footer';
import Button from '../../components/Button';
const ServiceDetails = () => {
  const { id } = useParams(); // Lấy id từ URL
  console.log('ID từ URL:', id);
  const [serviceDetail, setServiceDetail] = useState(null);
  useEffect(() => {
    const fetchServiceDetails = async () => {
      const data = await getDataServiceDetails(id);
      setServiceDetail(data);
    };
    fetchServiceDetails();
  }, [id]);
  if (!serviceDetail) return null;

  return (
    <DefaultLayout>
      <div className="service_page service_detail_page">
        <Banner
          heading={serviceDetail.title?.rendered}
          desc={serviceDetail.acf?.short_desc}
        />
        <div className="main">
          <div className="container">
            <section className=" detail_desc">
              {serviceDetail.acf?.content?.map((item) => (
                <h2 className="text-white text-center" key={id}>
                  {item.main_title}
                </h2>
              ))}
              <div className="sec_second_gap card_details">
                <div className="row">
                  {serviceDetail.acf?.content?.flatMap((item) =>
                    item.card_content?.map((card, id) => (
                      <div key={id} className="col col-12 col-md-4">
                        <CardItem
                          title={card.title}
                          desc={card.desc}
                          icon={card.icon?.url}
                          img={card.image?.url}
                        />
                      </div>
                    )),
                  )}
                </div>
              </div>
            </section>
            <div className="sec_second_gap contact_button d-flex justify-content-center">
              <Button
                className="btn --pri seemore_btn "
                title="Liên hệ"
                link="http://truongphucglobal.com.vn/contact/"
              />
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

export default ServiceDetails;
