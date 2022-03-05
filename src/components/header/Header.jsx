import React, { useRef, useEffect } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/tmovie.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "Tv Series",
    path: "/tv",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  useEffect(() => {
    const headerShrink = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", headerShrink);
    return () => {
      window.removeEventListener("scroll", headerShrink);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header_wrap container">
        <div className="logo">
          <img src={Logo} alt="" />
          <Link to="/">Movies</Link>
        </div>
        <ul className="header_nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
