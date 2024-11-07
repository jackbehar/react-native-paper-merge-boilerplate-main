import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator as ActivityIndicatorM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator
 * @uxpindescription Activity indicator is used to present progress of some activity in the app.
 * It can be used as a drop-in for the ActivityIndicator shipped with React Native.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ActivityIndicator, MD2Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ActivityIndicator animating={true} color={MD2Colors.red800} />
 * );
 *
 * export default MyComponent;
 * ```
 */

const ActivityIndicator = (props) => {
  return <ActivityIndicatorM {...props} />;
};

ActivityIndicator.propTypes = {
  children: PropTypes.node,
  /** Whether to show the indicator or hide it. */
  animating: PropTypes.bool,
  /** The color of the spinner. */
  color: PropTypes.string,
  /** Size of the indicator. */
  size: PropTypes.oneOf(["small", "large", PropTypes.number]),
  /** Whether the indicator should hide when not animating. */
  hidesWhenStopped: PropTypes.bool,
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

ActivityIndicator.defaultProps = {
  children: undefined,
  animating: true,
  size: "small",
  hidesWhenStopped: true,
};

export default ActivityIndicator;
