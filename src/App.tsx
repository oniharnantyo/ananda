import "styles/global.css";

import Homes from "pages/HomePage/HomePage"
import {Switch, Route, Redirect} from "react-router-dom"

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/about'> <About /> </Route>
        <Route exact path='/contact'> <Contact /> </Route>
        <Route exact path='/events'> <Event /> </Route> */}
        <Route exact path='/home'> <Homes /> </Route>
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
