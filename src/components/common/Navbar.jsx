import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { Link, useLocation, matchPath } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropDown from "../core/Auth/ProfileDropDown";

// import { ImCross } from "react-icons/im";

// import SmallScreenNavbar from "./SmallScreenNavbar";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        console.log("Printing Sublinks results", res);
        setSubLinks(res.data.data);
      } catch (err) {
        console.log("could not fetch the category list");
      }
      setLoading(false);
    })();
  }, []);

  console.log("subLinks", subLinks);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // const handleCrossButton = () => {
  //   isClose = isClose ? setIsClose(false) : setIsClose(true);
  // };
  return (
    <div
      className={`
    flex h-14 items-center justify-center border-b-[0.1rem] border-b-richblack-700
    $ {location.pathname !== "/" ? "bg-richblack-800" : ""}
    $ {location.pathname === "/" ? "fixed w-screen z-[1000] bg-richblack-900" : ""}
    $ {location.pathname !== "/about" ? "fixed w-screen z-[1000] bg-richblack-900" : ""}
    $ {
      location.pathname ==="/contact" || matchRoute("/catalog:catalogName)
                                      || matchRoute("/courses/:courseId") ?
      "fixed w-screen z-[1000] bg-richblack-800" : "" }
      transition-all duration-200                               
    }
    `}
    >
      <div
        className={`flex fixed ${
          location.pathname !== "/" ? "bg-richblack-900" : "bg-richblack-900"
        } z-40 lg:relative w-[100%] h-[8%] border-b-[0.1rem] lg:border-none border-b-richblack-500 lg:w-11/12
       max-w-maxContent items-center justify-between`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={42} loading="lazy" />
        </Link>

        {/* Nav Links*/}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />

                      <div
                        className="invisible absolute left-[50%] top-[50%] z-[1000]  flex  w-[13rem] translate-x-[-50%] translate-y-[3em] 
                                   flex-col rouned-lg bg-richblack-5 p-4  text-richblack-900 opacity-0
                                   transition-all duration-150 group-hover:visible  group-hover:opacity-100 
                                   group-hover:translate-y-[1.65rem] lg:w-[19rem]"
                      >
                        <div
                          className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%]
                                       rotate-45 rounded bg-richblack-5"
                        ></div>
                        {loading ? (
                          <p className="text-center spinner">Loading...</p>
                        ) : subLinks?.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Course found</p>
                        )}
                      </div>
                    </div>
                  </>
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
        <div className="hidden md:flex gap-x-4 items-center">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span
                  className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center
                 overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-100 rounded-[0.5rem]">
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
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
