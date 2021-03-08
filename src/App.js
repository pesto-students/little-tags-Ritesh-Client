import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import OrderHistory from "./pages/OrderHistory";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Thanks from "./pages/Thanks";
import TrackOrder from "./pages/TrackOrder";
import Wishlist from "./pages/Wishlist";
import { IntlProvider } from "react-intl";
import { langs } from "./lang";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [locale, setLocale] = React.useState("en");
  const changeLanguage = (lang) => {
    setLocale(lang);
  };
  return (
    <Router>
      <IntlProvider locale={locale} messages={langs[locale]}>
        <div className="flex flex-col h-screen justify-between h-screen">
          <Header changeLanguage={changeLanguage} />
          <Switch>
            <Route path="/wishlist">
              <Wishlist />
            </Route>
            <Route path="/trackOrder">
              <TrackOrder />
            </Route>
            <Route path="/thanks">
              <Thanks />
            </Route>
            <Route path="/productList">
              <ProductList />
            </Route>
            <Route path="/productDetail">
              <ProductDetail />
            </Route>
            <Route path="/orderHistory">
              <OrderHistory />
            </Route>
            <Route path="/editProfile">
              <EditProfile />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/cart">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </IntlProvider>
    </Router>
  );
}

export default App;
