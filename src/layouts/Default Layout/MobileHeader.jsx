/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { useState } from 'react';
import Images from '../../assets/image/Images';
import { Link } from 'react-router-dom';

const MobileHeader = ({ menu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mobile_header">
      <div className="header_mobile_wrapper ">
        {/* logo */}

        {/* Hamburger */}
        <div className="hamburger_menu">
          <button
            className="menu_button"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="logo_mobile_header">
          <Link to="/" className="logo_link">
            <img src={Images.logo} alt="Logo" className="logo" />
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="menu_overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      {/* Menu_drawer */}
      <div className={`menu_drawer ${isMenuOpen ? 'open' : ''}`}>
        {/* header_menu */}
        <div className="menu-drawer__top">
          {/* Logo */}
          <Link to="/" className="logo_link">
            <img src={Images.logo} alt="Logo" className="logo" />
          </Link>
          {/* Nút đóng menu */}
          <button className="close_menu" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <ul id="navbar__list__mobile">
          {menu.map((item) => (
            <li
              key={item.ID}
              className={`navbar_item ${
                item.child_items ? 'dropdown_icon' : ''
              }`}
            >
              <Link
                to={item.url}
                className="navbar_link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.child_items && item.child_items.length > 0 && (
                <ul className="navbar_dropdown">
                  {item.child_items.map((child) => (
                    <li key={child.ID} className="navbar_dropdown_item">
                      <Link
                        to={child.url}
                        className="navbar_dropdown_link"
                        onClick={() => setIsMenuOpen(false)}
                      >
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
    </div>
  );
};
export default MobileHeader;
