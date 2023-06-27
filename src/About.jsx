import { React } from "react";

function About({ setLang, t, i18n }) {
  return (
    <div className="w-[90%] md:w-[50%] m-auto text-lg border-4 border-purple p-4">
      {/* {t("about_text")} <br /> */}
      <br />
      {t("about_text2")} <br />
      React Js as a Front End ⚛️ <br />
      Express Js with MongoDb as a Backend 🚂 <br />
      Firebase Storage for storage of files 📦 <br />
      Fireabse Authentication for authentication with custom e-mail or with
      google 🔥 <br />
      react-i18next for localization 🇬🇧🇧🇬 <br />
      Tailwind CSS for CSS 🍃 <br />
    </div>
  );
}

export default About;
