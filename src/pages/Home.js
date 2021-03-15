/* eslint-disable no-undef */
import React from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Loading from "./Loading";
import checkAuth from "../services/checkAuth";
import { userStore } from "../redux/store";
import { setUser } from "../redux/actions";

function Home() {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      const user = checkAuth();
      setLoad(false);
      if (user) {
        userStore.dispatch(setUser(user.displayName));
      } else {
        userStore.dispatch(setUser(""));
      }
    }, 3 * 1000);
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
