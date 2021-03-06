// base
import Header from "./components/base/Header";
import Preloader from "./components/base/Preloader";
// page
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Preloader/>
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
