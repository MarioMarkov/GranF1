import { React } from "react";

function About() {
  return (
    <div className="w-[90%] md:w-[50%] m-auto text-lg border-4 border-purple p-4">
      Hey, this is my personal blog, where I want to share my passion of Formula
      1 with you. <br />
      Currently Formula 1 is not so popular in my country, so I want to share my
      opinions about it with someone and hopefully you find it interesting. I am
      working on implementing comments and many other features, so we can
      discuss Formula 1 together, so stay tuned for that. <br />
      <br />
      This site was build with: <br />
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
