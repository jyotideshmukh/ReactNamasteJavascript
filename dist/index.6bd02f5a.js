//how to create element in react 
//in createElement-- first param is tag
//second param is object for giving multiple attributes, 
// currently I have given "id" and "className" attributes
//third param is for content of element
const heading = React.createElement("div", {
    id: "parent"
}, /*
            When we need to create siblings tags, 
             we can use array as third parameter
             and create multiple comma separated elements 
            BUT.....
            with this below structure React is throwing below error
            
            react.development.js:199 Warning: Each child in a list should have a unique "key" prop.

Check the top-level render call using <div>. See https://reactjs.org/link/warning-keys for more information.
    at h1
            */ [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            "id": "heading1",
            "className": "green-h1"
        }, 'Hello World from React H1'),
        React.createElement("h2", {
            "id": "heading2",
            "className": "green-h1"
        }, 'Learnt sibling Elements in React')
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            "id": "heading2",
            "className": "green-h1"
        }, 'Hello World from React H1'),
        React.createElement("h2", {
            "id": "heading3",
            "className": "green-h1"
        }, 'Learnt sibling Elements in React')
    ])
]);
console.log(heading);
//create root in react
const root = ReactDOM.createRoot(document.getElementById("root"));
//rendering heading inside root
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
