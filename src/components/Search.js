import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { SEARCH_MODE_DEFAULT } from "../configs/constants";
import SearchMode from "./Search/SearchMode";
import SearchForm from "./Search/SearchForm";

const SearchWrapper = styled.div`
  margin: 10px 0;
`;

const Search = ({ onSearch, onReset }) => {
  const [ query, setQuery] = React.useState("");
  const [ mode, setMode] = React.useState(SEARCH_MODE_DEFAULT);

  const resetCallback = React.useCallback(() => {
    setQuery("");
    setMode(SEARCH_MODE_DEFAULT);
    onReset();
  }, [setQuery, setMode, onReset]);

  return (
    <SearchWrapper>
      <SearchForm
        query={query}
        onQueryChange={setQuery}
        onSubmit={() => onSearch(query, mode)}
        onReset={resetCallback}
      />
      <SearchMode
        mode={mode}
        onChange={setMode}
      />
    </SearchWrapper>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Search;
