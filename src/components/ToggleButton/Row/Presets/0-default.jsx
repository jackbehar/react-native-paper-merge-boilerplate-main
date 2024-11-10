import React from "react";
import ToggleButton from "../../ToggleButton";
import Row from "../Row";

export default (
  <Row uxpId="toggle-row-1">
    <ToggleButton
      uxpId="toggle-button-row-1"
      icon="format-align-left"
      value="left"
    />
    <ToggleButton
      uxpId="toggle-button-row-2"
      icon="format-align-right"
      value="right"
    />
  </Row>
);
