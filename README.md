# React router schema

This is a react-router-dom simple layer to handle routes like a json schema, adding guards and setups in a simple way.

### Important
This is a experimental project and i recommend not use in a production environment.

### Install

`npm install --save react-router-schema`

### Usage

The usage is very simple, you need to call the router and pass your routes object array:

index.js

```
    import React from "react";
    import ReactDOM from "react-dom";
    import Router from "react-router-schema";

    //Your components imports
    import Dashboard from "./Dashboard";
    import SignIn from "./SignIn";
    import SignUp from "./SignUp";

    const routes = [
    { path: "/", component: Example, exact: true },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp }
    ];

    ReactDOM.render(
      <Router routes={routes} />,
      document.getElementById("root")
    );

```

### Guards
You can add guards with the "guards" property to your routes and a guards array with your validations functions, a guard is a simple setup object with a guard info:

```
    import React from "react";
    import ReactDOM from "react-dom";
    import Router from "react-router-schema";

    //Your components imports
    import Dashboard from "./Dashboard";
    import SignIn from "./SignIn";
    import SignUp from "./SignUp";

    //Routes array
    const routes = [
    {
        path: "/",
        component: Example,
        exact: true,
        //Here you add a guards property, with the name of the guard
        //and the path where you want to reject
        guards: [{ name: "isAuth", rejectTo: "/signin" }]
    },
    {
        path: "/signin",
        component: SignIn
        guards: [{name: "noAuth", rejectTo: "/"}]
    },
    {
        path: "/signup",
        component: SignUp
        guards: [{name: "noAuth", rejectTo: "/"}]
    },
    ];

    //Guards functions array
    const guards = {
        //This is the name to call in routes setup
        isAuth: () => { //do some validation here },
        noAuth: () => { //do some validation here }
    };

    //add your guards array to guards poperty in the router
    ReactDOM.render(
      <Router routes={routes} guards={guards} />,
      document.getElementById("root")
    );

```


## License

MIT © [kmilo93sd](https://github.com/kmilo93sd)
