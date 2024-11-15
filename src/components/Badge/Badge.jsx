import React from "react";
import PropTypes from "prop-types";
import { Badge as BadgeM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Badge
 * @uxpindescription Badges are small status descriptors for UI elements.
 * A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Badge } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Badge>3</Badge>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Badge = (props) => {
  return <BadgeM {...props} />;
};

Badge.propTypes = {
  children: PropTypes.node,
  /** Whether the badge is visible */
  visible: PropTypes.bool,

  /** Size of the `Badge`. */
  size: PropTypes.number,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  ref: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

Badge.defaultProps = {
  children: undefined,
  visible: true,
  size: 20,
};

export default Badge;
