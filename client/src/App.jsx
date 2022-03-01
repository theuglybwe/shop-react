import Product from "./pages/Product";
import Home from "./pages/Home";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  const user=true;
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:productid">
          <Product/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route exact path="/register">
        {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;