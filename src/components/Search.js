import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import getAllProducts from "../services/getAllProducts";
import { useCookies } from "react-cookie";
function Search() {
  const [data, setData] = React.useState();
  const [cookies] = useCookies();
  React.useEffect(() => {
    const result = getAllProducts(cookies);
    result
      .then(r => r.json())
      .then(res => {
        setData(res);
      })
      .catch(e => {
        console.log(e);
      });
  }, [cookies]);
  const history = useHistory();
  const handleOnSelect = item => {
    history.push({
      pathname: "/productDetail",
      search: `${item.title}`,
      data: { item },
      category: { item },
    });
  };

  return (
    <FormattedMessage id="searchTitle" defaultMessage="search">
      {placeholder => {
        return (
          <ReactSearchAutocomplete
            items={data}
            fuseOptions={{ keys: ["title", "categoryName"] }}
            resultStringKeyName="title"
            onSelect={handleOnSelect}
            placeholder={placeholder[0]}
            styling={{
              borderRadius: "7px",
              color: "gray",
              fontSize: "14px",
            }}
          />
        );
      }}
    </FormattedMessage>
  );
}

export default Search;
