import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/api";
import { RiArrowDownSLine } from "react-icons/ri";

const subLinks = [
  {
    title: "Python",
    link: "/catalog/python",
  },
  {
    title: "Web dev",
    link: "/catalog/web-development",
  }
];

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);

  // const fetchSubLinks = async () => {
  //   try {
  //     const result = await apiConnector("GET", categories.CATEGORIES_API);
  //     console.log("Printing Sublinks results", result);
  //     setSubLinks(result.data.data);
  //   } catch (err) {
  //     console.log("could not fetch the category list");
  //   }
  // };

  // useEffect(() => {
  //   //fetchSubLinks();
  // }, []);

  const location = useLocation();
  const matchRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <div className="flex items-center justify-center  h-14 border-b-2  border-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={42} loading="lazy" />
        </Link>

        {/* Nav Links*/}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group">
                    <p>{link.title}</p>
                    <RiArrowDownSLine />

                    <div
                      className="invisible absolute left-[50%]  translate-x-[-50%] translate-y-[80%] top-[50%]
                     flex flex-col rouned-md bg-richblack-5 text-richblack-900 opacity-0
                      transition-all duration-200 group-hover:visible  group-hover:opacity-100 lg:w-[20rem]"
                    >
                      <div className="absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5"></div>
                    </div>
                    {
                      subLinks.length ? (
                        subLinks.map((subLink, index) => (
                            <Link to={`${subLink.link}`} key={index}>
                            <p>{subLink.title}</p>
                            </Link>
                          ))
                      ) : (<div></div>)
                    }
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login Sign up dashboard*/}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token === null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
