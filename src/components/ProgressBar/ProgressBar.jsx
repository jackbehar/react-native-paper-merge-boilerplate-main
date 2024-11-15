import React from "react";
import PropTypes from "prop-types";
import { ProgressBar as ProgressBarM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ProgressBar
 * @uxpindescription Progress bar is an indicator used to present progress of some activity in the app.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ProgressBar, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <ProgressBar progress={0.5} color={MD3Colors.error50} />
 * );
 *
 * export default MyComponent;
 * ```
 */

const ProgressBar = (props) => {
  return <ProgressBarM {...props} />;
};

ProgressBar.propTypes = {
  children: PropTypes.node,
  /** Animated value (between 0 and 1). This tells the progress bar to rely on this value to animate it.
Note: It should not be used in parallel with the `progress` prop. */
  animatedValue: PropTypes.number,
  /** Progress value (between 0 and 1).
Note: It should not be used in parallel with the `animatedValue` prop. */
  progress: PropTypes.string,
  /** Color of the progress bar. The background color will be calculated based on this but you can change it by passing `backgroundColor` to `style` prop.
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** If the progress bar will show indeterminate progress. */
  indeterminate: PropTypes.bool,
  /** Whether to show the ProgressBar (true, the default) or hide it (false). */
  visible: PropTypes.bool,
  /** Style of filled part of the ProgresBar. */
  fillStyle: PropTypes.object,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

ProgressBar.defaultProps = {
  children: undefined,
  progress: 0,
  visible: true,
  testID: "progress-bar",
};

export default ProgressBar;
