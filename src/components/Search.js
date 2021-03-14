import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import data from "../localData/data";
function Search() {
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
            fuseOptions={{ keys: ["title", "category"] }}
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
