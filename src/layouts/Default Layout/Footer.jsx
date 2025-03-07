import Images from '../../assets/image/Images';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="overlay"></div>
      <div className="container">
        <div className="footer_header">
          <div className="footer_logo">
            <img src={Images.logo} alt="" />
          </div>
          <div className="footer_form">
            <p className="title text-white" style={{ fontSize: '24px' }}>
              Nhận thông tin <span className="is_highlight">Mới Nhất</span>
            </p>
            <input
              type="text"
              placeholder="Nhập email của bạn!"
              style={{ width: '600px' }}
            />
          </div>
        </div>
        <div className="footer_body mt-5">
          <div className="inner">
            <div className="col col_1">
              <div
                className="col_1_info d-flex flex-column"
                style={{ gap: '2.4rem' }}
              >
                <div className="info_1">
                  <p className="is_highlight">Văn phòng đại diện</p>
                  <p className="text-white">
                    Số 28/32 Lữ Gia, Phường 9, Thành Phố Đà Lạt
                  </p>
                </div>
                <div className="info_2">
                  <p className="is_highlight">Địa chỉ xưởng</p>
                  <p className="text-white">
                    Khu Quang Trung, xã Gia Lâm, huyện Lâm Hà, tỉnh Lâm Đồng,
                    Việt Nam
                  </p>
                </div>
                <div className="info_3">
                  <p className="is_highlight">Hotline</p>
                  <p className="text-white">+84 0828 200 008</p>
                  <p className="text-white">+84 0966 977 775 (Whatsapp)</p>
                </div>
              </div>
            </div>
            <div className="col col_2 ">
              <p className="is_highlight">Về chúng tôi</p>
              <p className="text-white">Giới thiệu</p>
              <p className="text-white">Tuyển dụng</p>
              <p className="text-white">Chính sách bảo mật</p>
              <p className="text-white">Chính sách Quyền riêng tư</p>
              <p className="text-white">Điều khoản sử dụng</p>
            </div>
            <div className="col col_3">
              <p className="is_highlight">Dịch vụ</p>
              <p className="text-white">Buôn bán tơ kén</p>
              <p className="text-white">Dịch vụ lữ hành</p>
              <p className="text-white">Khách sạn lưu trú</p>
            </div>
            <div className="col col-4">
              <p className="is_highlight">Địa chỉ</p>
              <iframe
                className="google_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.2070922414923!2d108.33310477584666!3d11.82076463906182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317141f3746663b7%3A0x2a2cf8f40f3ec836!2sNamBan%20Silk!5e0!3m2!1svi!2s!4v1741255965039!5m2!1svi!2s"
                width="450"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
