import React from 'react';
import PropTypes from 'prop-types';
import { Appbar as AppbarM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Appbar/AppbarAction
 * @uxpindescription A component used to display an action item in the appbar.
 * @uxpinnamespace Appbar
 */

const Action = (props) => {
  return <AppbarM.Action {...props} />;
};

Action.propTypes = {
  /**
   * Custom color for the action icon.
   */
  color: PropTypes.string,

  /**
   * Color of the ripple effect.
   */
  rippleColor: PropTypes.string,

  /**
   * Name of the icon to show.
   */
  icon: PropTypes.string,

  /**
   * Optional icon size. Defaults to 24.
   */
  size: PropTypes.number,

  /**
   * Whether the button is disabled. Disabled buttons are greyed out and `onPress` is not triggered.
   */
  disabled: PropTypes.bool,

  /**
   * Accessibility label for the button. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Whether this is the leading button. Available in theme version 3.
   */
  isLeading: PropTypes.bool,

  /**
   * Custom style for the button container.
   */
  style: PropTypes.object,

  /**
   * Ref for the button.
   */
  ref: PropTypes.shape({ current: PropTypes.any }),

  /**
   * Theme for the component.
   */
  theme: PropTypes.object,
};

export default Action;
