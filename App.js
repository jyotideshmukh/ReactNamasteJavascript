import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "H1 heading using React 🚀"
);

console.log(heading);
//JSx heading -> it is HTML like or XML like format-> Babel transpiles it to React CreateElement
//We can use circular brackets to write JSX in multiple lines
const jsxHeading = (
  <h1 id="jsxheading" style="color:red;">
    React is {5 + 5} times better with JSX 🚀
  </h1>
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
