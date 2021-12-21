import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutUs from "./AboutUs.js";
import ContactUs from "./ContactUs.js";
import Products from "./Products.js";

function App() {
  return (
    <BrowserRouter>
    <h1>Pet Suppolies</h1>
    <Link to="/about"><button>About Us</button></Link>
    <Link to="/contact"><button>Contact Us</button></Link>
    <Link to="/products"><button>Products</button></Link>

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
  );
}

export default App;
