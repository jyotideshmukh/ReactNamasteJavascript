# Learning React from NamsteJavaScript(Akshay Saini)
## Fundamental concepts
### Install parcel using command
-  -D used for dev environment mena we need parcel only in dev enviroment
```
npm install -D parcel
``` 
### how to start server using parcel
```
npx parcel index.html
```

### install react
```
npm install react
```
### install react dom
```
npm i react-dom
```
 - I used instead of install to install as shortform for install

### Remove CDN links of React
now we removed CDN links used for react and then checked webpage but giving error as
Uncaught ReferenceError: React is not defined
so we need to import React from react node module in App.js 
### How to import React and ReactDOM
- e.g 
- import React from "react";
- import ReactDOM from "react-dom/client"

Though we imported React and ReactDOM from react and react-dom respectively, app gives error as "Browser scripts cannot have imports or exports."
#to solve above error we need to include script as module

### How to include App.js as module
```
<script type="module" src="./App.js"></script>
```

### Parcel
- Dev build
- Local Server
- HMR = Hot module Replacement
- File Watching Algorithm - written in c++
- caching things for you
- Image optimization
- Minification
- Bundle
- Compress
- consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Good error handling
- Diagnostic 
- HTTPS
- Remove unused code 

## How to add scripts 
- We can add scripts for creating different things in package.json under scripts key
- I have added scripts to create build in dev and prod environments
 
     ```
     "start": "npx parcel index.html",
     "build": "npx parcel build index.html",
     ```
## JSx
- It is bit difficult to create html element tag  with React CreateElement, we can use JSx
- JSx is HTMLlike or XML like structure
- In below example , both heading and jsxHeading are same objects
```
const heading = React.createElement("h1",
    {id: "heading"},
    "H1 heading using React 🚀"
);

console.log(heading);
//JSx heading
const jsxHeading = <h1 id="jsxheading">H1 heading using JSx 🚀</h1>;
console.log(jsxHeading);
```
## React components
 There are two types of react components
 - Class Components
 -  Functional componnets
```
const Title = () => {
    return <h1 id="heading">React Components</h1>;
}
```
## How to render class components
```
const Title = () => {
    return <h1 id="heading">React Components</h1>;
}

const ContentOfBody = () =>
{
    return (
            <>
            <Title />
            <div>
                <div>Container div</div>
                <p> This is learning how JSX can placed in different ways in JSX container</p>
            </div>
            </>     
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContentOfBody />);
```


