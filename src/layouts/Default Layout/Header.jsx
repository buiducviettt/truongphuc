import Images from '../../assets/image/Images';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMenu } from '../../assets/api/api';
import Button from '../../components/Button';
import MobileHeader from './MobileHeader';
const Header = () => {
  const [menu, setMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  //gọi api
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenu();
      if (data) {
        setMenu(data.items);
      }
    };
    fetchMenu();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (!menu) return null;
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Desktop Menu */}
      <div className="header_wrapper container ">
        <div className={`header_inner ${isScrolled ? 'scrolled' : ''}`}>
          <div className={`header_logo ${isScrolled ? 'scrolled' : ''}`}>
            <Link to="/">
              <img src={Images.logo} alt="" />
            </Link>
          </div>

          <div className="navbar_wrapper">
            <ul className="navbar_menu">
              {menu.map((item) => (
                <li
                  className={`navbar_item ${
                    item.child_items ? 'dropdown_icon' : ''
                  }`}
                  key={item.ID}
                >
                  <Link to={item.url} className="navbar_link">
                    {item.title}
                  </Link>
                  {/* Nếu có child_items, hiển thị submenu */}
                  {item.child_items && item.child_items.length > 0 && (
                    <ul className="navbar_dropdown">
                      {item.child_items.map((child) => (
                        <li key={child.ID} className="navbar_dropdown_item">
                          <Link to={child.url} className="navbar_dropdown_link">
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Button title="Liên hệ" className="btn_header" />
        </div>
      </div>
      {/* {MobileMenu} */}
      <MobileHeader menu={menu} />
    </header>
  );
};
export default Header;
