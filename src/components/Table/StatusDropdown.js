import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { STATUSES } from "../../configs/constants";

const StatusSelect = styled.select`
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 2px;
  width: 100px;
  background-color: #f7f7f7;
`;

const StatusOption = styled.option``;

const StatusDropdown = ({ value, onSelect }) => (
  <StatusSelect onChange={(e => onSelect(e.target.value))} defaultValue={value}>
    {STATUSES.map(status =>
      <StatusOption key={status} value={status}>{status}</StatusOption>
    )}
  </StatusSelect>
);

StatusDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default StatusDropdown;
