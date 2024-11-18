import React from "react";
import PropTypes from "prop-types";
import { Icon as IconM } from "react-native-paper";

// Generate the required CSS
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: MaterialCommunityIcons;
  }`;

// Create a stylesheet
const style = document.createElement('style');
style.type = 'text/css';

// Append the iconFontStyles to the stylesheet
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject the stylesheet into the document head
document.head.appendChild(style);

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Icon
 * @uxpindescription An icon component which renders icon from vector library.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Icon, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Icon
 *     source="camera"
 *     color={MD3Colors.error50}
 *     size={20}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */

const Icon = (props) => {
  return <IconM {...props} />;
};

Icon.propTypes = {
  children: PropTypes.node,
  /** Size of icon. */
  size: PropTypes.number,
  allowFontScaling: PropTypes.bool,
  /** Icon to display. */
  source: PropTypes.object,
  /** Color of the icon.
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** @optional */
  theme: PropTypes.object,
};

export default Icon;
