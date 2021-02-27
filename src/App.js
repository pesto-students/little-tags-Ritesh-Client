import React from "react";
import Home from "./components/Home";
import { IntlProvider } from "react-intl";
import { langs } from "./lang";
function App() {
  const [locale, setLocale] = React.useState("en");
  const changeLanguage = (lang) => {
    setLocale(lang);
  };
  return (
    <IntlProvider locale={locale} messages={langs[locale]}>
      <Home changeLanguage={changeLanguage} />
    </IntlProvider>
  );
}

export default App;
