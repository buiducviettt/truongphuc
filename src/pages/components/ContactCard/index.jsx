/* eslint-disable react/prop-types */
import '../styles/contact.scss';
const ContactCard = ({ icon, title, desc, info }) => {
  return (
    <div className="contact_card">
      <div className="inner">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <div className="info">
          <div className="info_heading">
            <div className="info_title">
              <p>{title}</p>
            </div>
            <div className="info_desc">
              <p>{desc}</p>
            </div>
          </div>
          <div className="info_bottom">
            <div className="info_detail">
              <p>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
