import DefaultLayout from '../../layouts/Default Layout';
import '../components/styles/aboutus.scss';
import { Parallax } from 'react-parallax';
import Images from '../../assets/image/Images';
const Introduction = () => {
  return (
    <DefaultLayout>
      <div className="aboutus_page">
        <section className="banner">
          <Parallax bgImage={Images.bannerhome} strength={300}>
            <div style={{ height: 500 }}></div>
          </Parallax>
        </section>
      </div>
    </DefaultLayout>
  );
};
export default Introduction;
