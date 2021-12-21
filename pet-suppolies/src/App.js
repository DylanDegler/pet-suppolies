//import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutUs from "./AboutUs.js";
import ContactUs from "./ContactUs.js";
import Products from "./Products.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1 className="page-header">Pet Suppolies</h1>
      <Link to="/about"><button className="btn btn-outline-info">About Us</button></Link>
      <Link to="/contact"><button className="btn btn-outline-info">Contact Us</button></Link>
      <Link to="/products"><button className="btn btn-outline-info">Products</button></Link>

      <Switch>
        <Route path = "/about">
          <AboutUs/>
        </Route>

        <Route path = "/contact">
          <ContactUs/>
        </Route>

        <Route path = "/products">
          <Products/>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
