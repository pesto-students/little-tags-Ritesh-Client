import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { FormattedMessage } from "react-intl";
function Search() {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("search", string, results);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <FormattedMessage id="searchTitle" defaultMessage="search">
      {(placeholder) => {
        return (
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            placeholder={placeholder[0]}
            styling={{
              borderRadius: "7px",
              color: "gray",
            }}
          />
        );
      }}
    </FormattedMessage>
  );
}

export default Search;