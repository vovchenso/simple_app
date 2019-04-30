import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { STATUSES } from "../configs/constants";

const StatisticsWrapper = styled.div`
  margin-top: 30px;
`;

const StatisticItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
`;

const StatisticTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 150px;
`;

const StatisticValue = styled.div``;

const Statistics = ({ data }) => (
  <StatisticsWrapper>
    {STATUSES.map(status =>
      <StatisticItem key={status}>
        <StatisticTitle>{status}</StatisticTitle>
        <StatisticValue>{data[status] || 0}</StatisticValue>
      </StatisticItem>
    )}
  </StatisticsWrapper>
);

Statistics.propTypes = {
  data: PropTypes.shape().isRequired
};

export default Statistics;
