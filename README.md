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
## Composition of Components
- We can nest multiple componnets into one another
- we can reuse the react components at many places
- how to achieve?

```
const ResContainer = () => {
    return (
        <div className="card-container">
            {
                resData.map((restorantData) => <RestoCard key={restorantData.info.id} restoData={restorantData.info} />)
            }
        </div>
    )
}
const AppContainer = () => {
    return (
        <div className="app-container">
            <search></search>
            <ResContainer></ResContainer>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="content">
            <Header />
            <AppContainer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

```

## How to achieve config driven develeopment
```
const RestoCard = (props) => {
    console.log(props);
    const { name, cuisines, costForTwo, cloudinaryImageId } = props?.restoData;
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="logo-img" src={"PATH OF IMAGE" + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
        </div>
    )
}
const ResContainer = () => {
    return (
        <div className="card-container">
            {
                resData.map((restorantData) => <RestoCard key={restorantData.info.id} restoData={restorantData.info} />)
            }
        </div>
    )
}
```
## Rendering Items - list must have Key
- while rendering list , react expect to add key for each items in lst otherwise it shows warning
```
Each child in a list should have a unique "key" prop.

Check the render method of `ResContainer`. See https://react.dev/link/warning-keys for more information. Error Component Stack
    at ResContainer (<anonymous>)
    at div (<anonymous>)
    at AppContainer (<anonymous>)
    at div (<anonymous>)
    at AppLayout (<anonymous>)
overrideMethod @ hook.js:608
console.<computed> @ index.js:1
validateExplicitKey @ react-jsx-dev-runtime.development.js:586
validateChildKeys @ react-jsx-dev-runtime.development.js:534
jsxDEVImpl @ react-jsx-dev-runtime.development.js:456
exports.jsxDEV @ react-jsx-dev-runtime.development.js:658
ResContainer @ App.js:1739
react-stack-bottom-frame @ react-dom-client.development.js:22428
renderWithHooks @ react-dom-client.development.js:5757
updateFunctionComponent @ react-dom-client.development.js:8018
beginWork @ react-dom-client.development.js:9683
runWithFiberInDEV @ react-dom-client.development.js:543
performUnitOfWork @ react-dom-client.development.js:15044
workLoopSync @ react-dom-client.development.js:14870
renderRootSync @ react-dom-client.development.js:14850
performWorkOnRoot @ react-dom-client.development.js:14334
performWorkOnRootViaSchedulerTask @ react-dom-client.development.js:15931
performWorkUntilDeadline @ scheduler.development.js:44Understand this errorAI
App.js:1724 
```
- How to add key to list items
```
<div className="card-container">
            {
                resData.map((restorantData) => <RestoCard key={restorantData.info.id} restoData={restorantData.info} />)
            }
        </div>
```
- Why we need to give key?
    -- Suppose we want to add one item dynamically in list, and we not assign key to item then React renders all items .
    -- If we add key, React renders only that item
- Don't assign index as key( React recommandation)    

## export import
- there are two types of export
- named export
```
//defined constants in constants.js
export const LOGO_URL = "PATH OF logo";
//how to import 
import { LOGO_URL } from "../utils/constants"
```
- default export
```
//defined Header in Header.js
export default Header;
//how to import 
import Header from "./components/Header"
```

## React Hooks
- useState - useState is a React Hook that lets you add a state variable to your component.
- useEffect- useEffect is a React Hook that lets you synchronize a component with an external system.

## Shimmer UI
Show fake cards with gray UI