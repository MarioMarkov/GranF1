import React from "react";
import { Link } from "react-router-dom";
export default function MobileNav({ isOpen, url, t }) {
  return (
    <div className="md:hidden">
      {isOpen === true && (
        <section
          id="mobile-menu"
          className={
            "h-full text-white absolute bg-purple opacity-95 w-full text-5xl  flex-col justify-content-center origin-top animate-open-menu "
          }
        >
          <nav
            aria-label="mobile"
            className="flex flex-col w-full min-h-screen items-center opacity-100"
          >
            <Link
              className={
                "w-full text-center hover:opacity-90 text-white py-8 " +
                (url === "/"
                  ? "  border-b-[3px] border-b-white border-t-[3px] border-t-white"
                  : "")
              }
              to="/"
            >
              {t("home")}
            </Link>
            <Link
              className={
                "w-full text-center hover:opacity-90 text-white py-8" +
                (url === "/articles/all/true"
                  ? "  border-b-[3px] border-b-white border-t-[3px] border-t-white"
                  : "")
              }
              to="/articles/all/true"
            >
              {t("race_reviews")}
            </Link>
            <Link
              className={
                "w-full text-center hover:opacity-90 text-white py-8" +
                (url === "/articles/all/false"
                  ? "  border-b-[3px] border-b-white border-t-[3px] border-t-white"
                  : "")
              }
              to="/articles/all/false"
            >
              {t("f1_stories")}
            </Link>
            <Link
              className={
                "w-full text-center hover:opacity-90 text-white py-8" +
                (url === "/about"
                  ? " border-b-[3px] border-b-white border-t-[3px] border-t-white"
                  : "")
              }
              to="/about"
            >
              {t("about")}
            </Link>

            {process.env.NODE_ENV === "development" ? (
              <Link
                className={
                  "w-full text-center hover:opacity-90 text-white py-8" +
                  (url === "/add"
                    ? " border-b-[3px] border-b-white border-t-[3px] border-t-white"
                    : "")
                }
                to="/add"
              >
                {t("add_article")}
              </Link>
            ) : (
              <></>
            )}
          </nav>
        </section>
      )}
    </div>
  );
}
