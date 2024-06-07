import React, { useState } from "react";
import { Link } from "react-router-dom";
const headerMenu = [
  { name: "Home", path: "/", dropdown: false },
  { name: "About", path: "/", dropdown: false },
  { name: "Pages", path: "/", dropdown: true },
  { name: "Services", path: "/", dropdown: true },
  { name: "Products", path: "/", dropdown: false },
  { name: "Blogs", path: "/", dropdown: true },
];
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="relative z-[99]">
      <div className="px-[20px] lg:px-[55px] pt-[20px] xl:pt-[48px] 2xl:pt-[78px] pb-6">
        <div className="flex justify-between items-center">
          <Link className="logo" to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <div className="menu hidden lg:block">
            <ul className="flex list-type-none justify-center">
              {headerMenu.map((item, i) => (
                <li key={i} className="xl:px-[20px] 2xl:px-[40px]">
                  <Link to={item.path} className="text-white text-base">
                    {item.name} {item.dropdown && "+"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Responsive Menu */}
          <div
            className={`mobile-menu fixed left-0 top-0 h-[100vh] w-full z-[9999] ${
              showMenu && "open"
            }`}
          >
            <div
              className="text-dark opacity-[0.4] absolute left-0 top-0 w-full h-full"
              onClick={() => setShowMenu(false)}
            ></div>
            <div className="mobile-content">
              <ul className="list-type-none">
                {headerMenu.map((item, i) => (
                  <li key={i} className="py-2">
                    <Link to={item.path} className="text-white text-base">
                      {item.name} {item.dropdown && "+"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className=""
            onClick={() => setShowMenu((showMenu) => !showMenu)}
          >
            <img src="/images/Menu.svg" alt="menu button" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
