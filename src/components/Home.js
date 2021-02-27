import React from "react";
import Categories from "./Categories";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
function Home({ changeLanguage }) {
  return (
    <div>
      <Header changeLanguage={changeLanguage} />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
