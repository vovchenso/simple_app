import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  transition: 0.15s border-color ease;
  appearance: none;
  padding: 10px 15px;
  font-size: 16px;
  width: 500px;
  
  &:focus {
    border-color: #45a3d9;
    outline: none;
  }
`;

const SearchButton = styled.button`
  margin-left: 20px;
  height: 40px;
  width: 150px;
  border: none;
  cursor: pointer;
  border-radius: 10rem;
  background: #45a3d9;
  outline: none;
  font-size: 16px;
  line-height: 40px;
  color: #fff;
  transition: 0.3s ease-in-out;
  transition-property: background-color, opacity, color, border-color;

  &:hover {
    background: #0a6fc2;
  }  
`;

const ResetButton = styled(SearchButton)`
  border: 1px solid #45a3d9;
  background: #fff;
  color: #45a3d9;

  &:hover {
    background: #fff;
  }
`;

const SearchForm = ({ query, onQueryChange, onSubmit, onReset }) => {
  return (
    <SearchFormWrapper onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}>
      <SearchInput value={query} onChange={(event) => onQueryChange(event.target.value)}/>
      <SearchButton type="submit">Search</SearchButton>
      <ResetButton onClick={onReset}>Reset</ResetButton>
    </SearchFormWrapper>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default SearchForm;
