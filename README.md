# Learning React from NamsteJavaScript(Akshay Saini)
## Fundamental concepts
### Install parcel using command
- npm install -D parcel # -D used for dev environment mena we need parcel only in dev enviroment
### how to start server using parcel
- npx parcel index.html

### install react
- npm install react
### install react dom
- npm i react-dom #I used instead of install to install as shortform for install

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
- e.g <script type="module" src="./App.js"></script>

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





