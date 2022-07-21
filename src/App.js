import "./App.css";
import Header from "./components/jsx/Header";
import Items, { Spacer } from "./components/jsx/Items";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/jsx/About";
import ItemPage from "./components/jsx/ItemPage";
import Menu from "./components/jsx/Menu";
import Login from "./components/jsx/Login";
import Cart from "./components/jsx/Cart";
import Data from "./data/data.js";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/">
          <div className="top">
            <Spacer />
            <Items take={Data.category} />
            <Items take={Data.category2} />
          </div>
        </Route>
        <Route exact path="/products">
          <ItemPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
// {/* <Route component={About} path="/about" /> */}
// {console.log(process.env.REACT_APP_SOME_APIKEY)}

export default App;
// export default withRouter(App);
