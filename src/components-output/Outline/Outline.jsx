import React from "react";
import PropTypes from "prop-types";
import { Outline as OutlineM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Outline
 * @uxpindescription
 */

const Outline = (props) => {
  return <OutlineM {...props} />;
};

Outline.propTypes = {
  children: PropTypes.node,
  isV3: PropTypes.bool,
  activeColor: PropTypes.string,
  backgroundColor: PropTypes.object,
  hasActiveOutline: PropTypes.bool,
  focused: PropTypes.bool,
  outlineColor: PropTypes.string,
  roundness: PropTypes.number,
  label: PropTypes.oneOf([PropTypes.string, PropTypes.object]),

  /** @uxpincontroltype css */
  style: PropTypes.object,
};

Outline.defaultProps = {
  children: undefined,
};

export default Outline;
