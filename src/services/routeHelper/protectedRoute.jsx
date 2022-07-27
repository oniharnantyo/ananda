import { Redirect, Route } from "react-router-dom";
import AuthService from "services/auth.service";

//you supposed to get role from token too, so you probably need to use getUserFromToken

export const ProtectedRoute = ({ ...routeProps }) => {
    console.log(AuthService.isAuthenticated())
    if (AuthService.isAuthenticated()) {
        console.log(routeProps)
        return <Route {...routeProps} />;
    }
    else {
        return <Redirect to={{ pathname: "login" }} />
    }
}

export const PrivateRoute = ({ ...routeProps }) => {
    //if already logged in can not go to login page
    if (AuthService.isAuthenticated()) {
        return <Redirect to={{ pathname: "/home" }} />;
    } else return <Route {...routeProps} />;
}


          // if (
        //     getUserFromToken().roleId > 0 &&
        //     String(routeProps.path).includes("carrot")
        //   ) {
        //     return <Redirect to={{ pathname: "/" }} />;
        //   } else if (
        //     !(getUserFromToken().roleId <= 2) &&
        //     String(routeProps.path).includes("group")
        //   ) {
        //     return <Redirect to={{ pathname: "/" }} />;
        //   } else if (
        //     getUserFromToken().roleId > 0 &&
        //     String(routeProps.path).includes("user")
        //   ) {
        //     return <Redirect to={{ pathname: "/" }} />;
        //   } else 