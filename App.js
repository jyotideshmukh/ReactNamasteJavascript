import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
    {id: "heading"},
    "H1 heading using React 🚀"
);

console.log(heading);
//JSx heading
const jsxHeading = <h1 id="jsxheading">H1 heading using JSx 🚀</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);