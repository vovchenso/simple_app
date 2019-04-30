import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StatusDropdown from "./Table/StatusDropdown";

const TableWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
  border: 1px solid #f5f5f5;
`;

const TableRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  transition: 0.5s;
  border-bottom: 1px solid #f5f5f5;

  &:hover {
    background: #f5f5f5;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled(TableRow)`
  font-weight: bold;
  background: #ccc;

  &:hover {
    background: #ccc;
  }
`;

const TableCell = styled.div`
  width: calc(100% / 4);
  text-align: ${props => props.isCenter ? "center" : "left"};
  padding: 10px;
  box-sizing: border-box;
  border-right: 1px solid #f5f5f5;
  
  &:last-child {
    border-right: none;
  }
`;

const TableNoData = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  padding: 20px 0;
`;

const Table = ({ data, onStatusChange }) => (
  <TableWrapper>
    <TableHeader>
      <TableCell isCenter>Name</TableCell>
      <TableCell isCenter>Role</TableCell>
      <TableCell isCenter>Connected</TableCell>
      <TableCell isCenter>Status</TableCell>
    </TableHeader>
    {data.length === 0 &&
      <TableNoData>No data available</TableNoData>
    }
    {data.map(row =>
    <TableRow key={row.id}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.role}</TableCell>
      <TableCell>{row.connected}</TableCell>
      <TableCell isCenter>
        <StatusDropdown
          value={row.status}
          onSelect={value => onStatusChange(row.id, value)}
        />
      </TableCell>
    </TableRow>
    )}
  </TableWrapper>
);

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onStatusChange: PropTypes.func.isRequired
};

export default Table;
