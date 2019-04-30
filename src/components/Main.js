import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Search from "./Search";
import Table from "./Table";
import Statistics from "./Statistics";

const MainWrapper = styled.main`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-width: 1024px;
`;

const Main = ({ search, searchReset, tableStatusChange, statistics, data }) => (
  <MainWrapper>
    <Search
      onSearch={search}
      onReset={searchReset}
    />
    <Table
      data={data}
      onStatusChange={tableStatusChange}
    />
    <Statistics
      data={statistics}
    />
  </MainWrapper>
);

Main.propTypes = {
  search: PropTypes.func.isRequired,
  searchReset: PropTypes.func.isRequired,
  tableStatusChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  statistics: PropTypes.shape().isRequired
};

export default Main;
