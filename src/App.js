import React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import OrderHistory from "./pages/OrderHistory";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Thanks from "./pages/Thanks";
import Wishlist from "./pages/Wishlist";
import { IntlProvider } from "react-intl";
import { langs } from "./lang";
import Header from "./components/Header";
import Footer from "./components/Footer";
import checkAuth from "./services/checkAuth";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./pages/Loading";
import { store } from "./redux/store";
import { setUser } from "./redux/actions";
import { useCookies } from "react-cookie";
function App() {
  const [locale, setLocale] = React.useState("en");
  const changeLanguage = lang => {
    setLocale(lang);
  };
  const [cookies] = useCookies();
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    if (!cookies.token) {
      setLoad(false);
      return;
    }
    const user = checkAuth(cookies);
    user
      .then(r => r.json())
      .then(res => {
        if (res) {
          store.dispatch(setUser(res));
          setLoad(false);
        } else {
          store.dispatch(setUser(undefined));
          setLoad(false);
        }
      })
      .catch(e => {
        console.log(e);
        setLoad(false);
      });
  }, [cookies]);
  if (load) return <Loading />;

  return (
    <IntlProvider locale={locale} messages={langs[locale]}>
      <div className="flex flex-col justify-between min-h-screen">
        <Header changeLanguage={changeLanguage} />
        <ToastContainer />
        <Switch>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/productList">
            <ErrorBoundary>
              <ProductList />
            </ErrorBoundary>
          </Route>
          <Route path="/productDetail">
            <ErrorBoundary>
              <ProductDetail />
            </ErrorBoundary>
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
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
