/* eslint-disable no-undef */
import React from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Loading from "./Loading";
import checkAuth from "../services/checkAuth";
import { store } from "../redux/store";
import { setUser } from "../redux/actions";

function Home() {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      const user = checkAuth();
      setLoad(false);
      if (user) {
        store.dispatch(setUser(user.displayName));
      } else {
        store.dispatch(setUser(""));
      }
    }, 1.5 * 1000);
  }, []);
  if (load) return <Loading />;
  return (
    <div>
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
