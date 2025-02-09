//how to create element in react 
//in createElement-- first param is tag
//second param is object for giving multiple attributes, 
// currently I have given "id" and "className" attributes
//third param is for content of element
const heading = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        React.createElement(
            "h1",
            {
                "id": "heading",
                "className": "green-h1"
            },
            'Hello World from React')));
console.log(heading);
//create root in react
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading inside root
root.render(heading);
