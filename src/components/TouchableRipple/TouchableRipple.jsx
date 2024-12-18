import React from "react";
import PropTypes from "prop-types";
import { TouchableRipple as TouchableRippleM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Touchable
 * @uxpindescription
 */

const TouchableRipple = (props) => {
  return <TouchableRippleM {...props} onPress={() => undefined} />;
};

TouchableRipple.propTypes = {
  children: PropTypes.node,

  style: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.object,
    PropTypes.object,
  ]),
  /** Whether to render the ripple outside the view bounds. */
  borderless: PropTypes.bool,
  /** Type of background drawabale to display the feedback (Android).
https://reactnative.dev/docs/pressable#rippleconfig */
  background: PropTypes.object,
  /** Whether to start the ripple at the center (Web). */
  centered: PropTypes.bool,
  /** Whether to prevent interaction with the touchable. */
  disabled: PropTypes.bool,
  /** Function to execute on press. If not set, will cause the touchable to be disabled. */
  onPress: PropTypes.func,
  /** Function to execute on long press. */
  onLongPress: PropTypes.func,
  /** Function to execute immediately when a touch is engaged, before `onPressOut` and `onPress`. */
  onPressIn: PropTypes.func,
  /** Function to execute when a touch is released. */
  onPressOut: PropTypes.func,
  /** Color of the ripple effect (Android >= 5.0 and Web).
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string,
  /** Color of the underlay for the highlight effect (Android < 5.0 and iOS).
   * @uxpincontroltype color
   */
  underlayColor: PropTypes.string,
  /** @optional */
  theme: PropTypes.object,
  key: PropTypes.string,
  route: PropTypes.object,
};

export default TouchableRipple;
