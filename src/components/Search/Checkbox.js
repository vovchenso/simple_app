import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 20px;
`;

const CheckboxIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #45a3d9;
  margin-right: 5px;
`;

const CheckboxTitle = styled.span`
  font-size: 16px;
`;

const Checkbox = ({ title, isActive, onSelect }) => (
  <CheckboxWrapper onClick={onSelect}>
    <CheckboxIcon icon={isActive ? faCheckCircle : faCircle }/>
    <CheckboxTitle>{title}</CheckboxTitle>
  </CheckboxWrapper>
);

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Checkbox;
