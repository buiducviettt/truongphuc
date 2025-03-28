import DefaultLayout from '../../layouts/Default Layout';
import Banner from '../components/Banner';
import '../../pages/components/styles/contact.scss';
import FormContact from '../components/FormContact';
import Footer from '../../layouts/Default Layout/Footer';
import ContactCard from '../components/ContactCard';
const Contact = () => {
  return (
    <DefaultLayout>
      <div className="contact_page">
        <Banner
          heading="Thông tin liên hệ"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <div className="main">
          <div className="container">
            <div className="contact_wrapper">
              <div className="contact_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.2070922414923!2d108.33310477584666!3d11.82076463906182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317141f3746663b7%3A0x2a2cf8f40f3ec836!2sNamBan%20Silk!5e0!3m2!1svi!2s!4v1742898022607!5m2!1svi!2s"
                  width="100%"
                  height="500"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <ul className="sec_gap contact_info_lists">
                <li className="contact_info_list">
                  <ContactCard
                    title="Tư vấn dịch vụ"
                    desc="Speak to our friendly team."
                    info="support@untitledui.com"
                  />
                </li>
                <li className="contact_info_list">
                  <ContactCard
                    title="Tư vấn dịch vụ"
                    desc="Speak to our friendly team."
                    info="support@untitledui.com"
                  />
                </li>
                <li className="contact_info_list">
                  <ContactCard
                    title="Tư vấn dịch vụ"
                    desc="Speak to our friendly team."
                    info="support@untitledui.com"
                  />
                </li>
                <li className="contact_info_list">
                  <ContactCard
                    title="Tư vấn dịch vụ"
                    desc="Speak to our friendly team."
                    info="support@untitledui.com"
                  />
                </li>
              </ul>
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
export default Contact;
