import { useState } from 'react';
import Button from '../../../components/Button';
const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    saveInfo: false,
  });
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện gửi dữ liệu (có thể qua API hoặc phương thức nào đó)
    console.log('Form submitted:', formData);

    // Reset form sau khi submit
    setFormData({
      name: '',
      email: '',
      message: '',
      saveInfo: false,
    });
    setResponse('Form has been submitted');
  };
  const [response, setResponse] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="form_contact">
      <div className="container">
        <div className="inner">
          <div className="row">
            <div className="col col-12 col-md-6 ">
              <div className="info_header">
                <h2 className="title text-white">
                  Thông Tin <span className="is_highlight">Của Bạn</span>
                </h2>
                <p className="desc text-white">
                  Trao cho nhau những cơ hội kinh doanh và khám phá mới
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="form_list d-flex flex-column "
                style={{ gap: '1.6rem' }}
              >
                <div
                  className="form_header d-flex align-items-center "
                  style={{ gap: '1.6rem' }}
                >
                  <div className="form_group d-flex flex-column">
                    <label htmlFor="" className="text-white">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form_group d-flex flex-column">
                    <label htmlFor="" className="text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form_group d-flex flex-column">
                  <label htmlFor="" className="text-white">
                    Nội dung
                  </label>
                  <textarea
                    style={{
                      borderRadius: '8px',
                      minHeight: '12rem',
                    }}
                    name="message"
                    value={formData.message}
                    id="message"
                    onChange={handleChange}
                  ></textarea>
                  <div
                    className="checkbox_wrapper d-flex"
                    style={{ gap: '2rem' }}
                  >
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                    />
                    <label className="text-white" htmlFor="">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                </div>
                <Button
                  title="Gửi ngay"
                  className="seemore_btn"
                  type="submit"
                />
                {response && <p>Hello</p>}
              </form>
            </div>
            <div className=" col col-12 col-md-6  ">
              <div className="right_content" style={{ gap: '1.6rem' }}>
                <p className="text-white" style={{ paddingBottom: '2.4rem' }}>
                  Dưới nắng, những cuộn tơ ánh lên sắc vàng, sắc bạc óng ả, mềm
                  mại. Theo kinh nghiệm sản xuất truyền thống lâu năm, tơ phải
                  phơi dưới nắng to thì mới sáng, đẹp, nếu trời âm u thì tơ sẽ
                  xám xịt, không chất lượng.
                </p>
                <div
                  className="info_groups text-white d-flex flex-column"
                  style={{ gap: '2.4rem' }}
                >
                  <div className="info_group">
                    <p className="title">Văn phòng đại diện</p>
                    <span>Số 28/32 Lữ Gia, Phường 9, Thành Phố Đà Lạt</span>
                  </div>
                  <div className="info_group">
                    <p className="title">Địa chỉ xưởng</p>
                    <span>
                      Khu Quang Trung, xã Gia Lâm, huyện Lâm Hà, tỉnh Lâm Đồng,
                      Việt Nam
                    </span>
                  </div>
                  <div className="info_group">
                    <p className="title">Thông tin liên hệ</p>
                    <p>+84 0828 200 008</p>
                    <p>+84 0966 977 775 (Whatsapp)</p>
                  </div>
                  <div className="info_group">
                    <p className="title">Mạng xã hội</p>
                    <span>Số 28/32 Lữ Gia, Phường 9, Thành Phố Đà Lạt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormContact;
