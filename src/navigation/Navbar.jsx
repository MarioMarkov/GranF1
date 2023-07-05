import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import { Gb, Bg } from "react-flags-select";
import MobileNav from "./MobileNav";

function Navbar({ setLang, t, i18n }) {
  const [isOpen, setIsOpen] = useState(false);

  // Getting current location in url
  const location = useLocation();

  // Variable to store the current location url
  const [url, setUrl] = useState(null);
  //const { logOut, user } = useUserAuth();

  // Setting url variable to the current url for the line below nav items
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // Translation functions

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Auth functions

  // Function to render log in or sign up or log out depending if
  // a user is logged in
  // const renderAuthenticationUI = () => {
  //   //console.log(user);
  //   if (user) {
  //     return (
  //       <Button className="p-2.3 mx-2" variant="primary" onClick={handleLogout}>
  //         Log out
  //       </Button>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Link className="p-2.3 mx-2" to="/signup">
  //           {t("sign_up")}
  //         </Link>
  //         <Link className="p-2.3 mx-2" to="/login">
  //           {t("login")}
  //         </Link>
  //       </>
  //     );
  //   }
  // };

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div>
      <nav className="bg-white w-full  top-0 left-0 border-b border-gray-200 mb-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              {t("gran_f1")}
            </span>
          </Link>
          {process.env.NODE_ENV === "development" && (
            <div className="flex md:order-2">
              <Link to="/add">
                <button
                  type="button"
                  className="text-white bg-purple  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                  {t("add_article")}
                </button>
              </Link>
            </div>
          )}

          <div className="md:order-3 text-3xl flex">
            <div className="flex gap-[10px]">
              <button>
                <Gb
                  onClick={() => changeLanguage("en")}
                  className="inline"
                ></Gb>
              </button>{" "}
              <button>
                <Bg
                  onClick={() => changeLanguage("bg")}
                  className="inline"
                ></Bg>
              </button>
            </div>

            <div className="flex md:hidden">
              <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-2xl font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={
                    "block py-2 pl-3 pr-4  hover:text-purple  md:p-0" +
                    (url === "/" ? "  border-b-[3px] border-b-purple" : "")
                  }
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="articles/all/true"
                  className={
                    "block py-2 pl-3 pr-4  hover:text-purple  md:p-0" +
                    (url === "/articles/all/true"
                      ? "  border-b-[3px] border-b-purple"
                      : "")
                  }
                >
                  {t("race_reviews")}
                </Link>
              </li>
              <li>
                <Link
                  to="/articles/all/false"
                  className={
                    "block py-2 pl-3 pr-4  hover:text-purple  md:p-0" +
                    (url === "/articles/all/false"
                      ? "  border-b-[3px] border-b-purple"
                      : "")
                  }
                >
                  {t("f1_stories")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    "block py-2 pl-3 pr-4  hover:text-purple  md:p-0" +
                    (url === "/about" ? "  border-b-[3px] border-b-purple" : "")
                  }
                >
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={isOpen} url={url} t={t}></MobileNav>
    </div>
  );
}

export default Navbar;
