import DefaultLayout from '../../layouts/Default Layout';
import '../components/styles/aboutus.scss';
import Images from '../../assets/image/Images';
import Banner from '../components/Banner';
import IntroWrapper from '../components/IntroWrapper';
import IntroGalerry from '../components/IntroWrapper/IntroGallery';
const Introduction = () => {
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
        </div>
      </div>
    </DefaultLayout>
  );
};
export default Introduction;
