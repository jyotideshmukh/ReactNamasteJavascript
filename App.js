//how to create element in react 
const heading = React.createElement("h1",{},'Hello World from React');
//create root in react
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading inside root
root.render(heading);
