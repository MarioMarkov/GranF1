// Constants.js
const production = {
  url: "https://granf1.onrender.com",
};
const development = {
  url: "",
};
export const config =
  process.env.NODE_ENV === "development" ? development : production;
