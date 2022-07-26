import "styles/global.css";
import Homes from "pages/HomePage/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "pages/BlogPage/BlogPage";
import Login from "pages/LoginPage/LoginPage";
// import authVerify from "services/auth-verify";
import "antd/dist/antd.css";
import AuthVerify from "services/auth-verify";
import AuthService from "services/auth.service";
import { ProtectedRoute, PrivateRoute } from "services/routeHelper/protectedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/about'> <About /> </Route>
        <Route exact path='/contact'> <Contact /> </Route>*/}
        <ProtectedRoute exact path='/blog'>
          <Blog />
        </ProtectedRoute >
        <PrivateRoute exact path='/login'>
          <Login />
        </PrivateRoute  >
        <ProtectedRoute exact path='/home'>
          <Homes />
        </ProtectedRoute >
        <Redirect to='/home' />
      </Switch>
      <AuthVerify />
    </div>);
}
export default App;
