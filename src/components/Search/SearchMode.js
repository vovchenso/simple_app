import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Checkbox from "./Checkbox";
import {
  SEARCH_MODE_AND,
  SEARCH_MODE_DEFAULT,
  SEARCH_MODE_OR
} from "../../configs/constants";

const SearchModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SearchMode = ({ mode, onChange }) => (
  <SearchModeWrapper>
    <Checkbox
      isActive={mode === SEARCH_MODE_DEFAULT}
      onSelect={() => onChange(SEARCH_MODE_DEFAULT)}
      title="Normal"
    />
    <Checkbox
      isActive={mode === SEARCH_MODE_AND}
      onSelect={() => onChange(SEARCH_MODE_AND)}
      title="And"
    />
    <Checkbox
      isActive={mode === SEARCH_MODE_OR}
      onSelect={() => onChange(SEARCH_MODE_OR)}
      title="Or"
    />
  </SearchModeWrapper>
);

SearchMode.propTypes = {
  mode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchMode;
