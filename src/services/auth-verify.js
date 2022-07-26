import React from "react";
import { withRouter } from "react-router";
import AuthService from "./auth.service";

const logOut = () => {
    AuthService.logout();
  };

 const parseJwt = (token) =>{
    console.log(token)
    try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
 }

 const AuthVerify = (props)=>{
    props.history.listen(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            const decodedJwt = parseJwt(user.accessToken)
            console.log(decodedJwt)
            // if(decodedJwt.exp * 100<Date.now()){
            //     logOut()
            // }
           
        }
    })
    return <div></div>;
 }

 export default withRouter(AuthVerify)