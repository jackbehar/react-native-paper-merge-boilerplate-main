import React from "react";
import PropTypes from "prop-types";
import { StyledText as StyledTextM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/StyledText
 * @uxpindescription
 */

const StyledText = (props) => {
  return <StyledTextM {...props} />;
};

StyledText.propTypes = {
  children: PropTypes.node,
  alpha: PropTypes.number,
  family: PropTypes.oneOf(["regular", "medium", "light", "thin"]),

  /** @uxpincontroltype css */
  style: PropTypes.object,
  theme: PropTypes.object,
};

StyledText.defaultProps = {
  children: undefined,
  alpha: 1,
};

export default StyledText;
