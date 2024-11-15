import React from "react";
import PropTypes from "prop-types";
import { Text as TextM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Text
 * @uxpindescription Typography component showing styles complied with passed variant prop and supported by the type system.
 */

const Text = (props) => {
  return <TextM {...props} />;
};

Text.propTypes = {
  children: PropTypes.node,
  /** Variant defines appropriate text styles for type role and its size. */
  variant: PropTypes.oneOf([
    "displayLarge",
    "displayMedium",
    "displaySmall",
    "headlineLarge",
    "headlineMedium",
    "headlineSmall",
    "titleLarge",
    "titleMedium",
    "titleSmall",
    "labelLarge",
    "labelMedium",
    "labelSmall",
    "bodyLarge",
    "bodyMedium",
    "bodySmall",
  ]),

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

Text.defaultProps = {};

export default Text;
