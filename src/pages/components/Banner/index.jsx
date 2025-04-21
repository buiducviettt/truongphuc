/* eslint-disable react/prop-types */
import Images from '../../../assets/image/Images';
import { Parallax } from 'react-parallax';
import Button from '../../../components/Button';
import { useState } from 'react';
import emailjs from 'emailjs-com';
const Banner = ({ heading, desc, dataaos }) => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    if (!formData.email.trim()) {
      setError('Vui lòng nhập email!');
      return;
    }
    setError(''); // Xóa lỗi nếu email hợp lệ
    const templateParams = {
      email: formData.email,
    };
    emailjs
      .send(
        'service_j82miru',
        'template_fniwaeu',
        templateParams,
        'sVYhiGYBPjVEO500Z',
      )
      .then(
        (result) => {
          console.log('Email sent successfully', result.text);
          setIsSubmit(true);
          setFormData({ email: '' });
        },
        (error) => {
          console.error('Error sending email:', error.text);
        },
      );
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <section className="banner">
      <div className="overlay"></div>
      <Parallax
        bgImage={Images.bannerhome}
        strength={300}
        style={{ height: 500 }}
      >
        <div className="container" data-aos={dataaos}>
          <div className="banner_content">
            <div className="banner_header text-white">
              <h2>{heading}</h2>
              <p>{desc}</p>
            </div>
            <form className="banner_form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Nhập email để nhận thông tin"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Button title="Gửi" className="cta_btn" type="submit" />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isSubmit && <p style={{ color: 'green' }}>Email đã được gửi!</p>}
          </div>
        </div>
      </Parallax>
    </section>
  );
};
export default Banner;
