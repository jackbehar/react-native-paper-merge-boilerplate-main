import React from 'react';
import PropTypes from 'prop-types';
import { Appbar as AppbarM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Appbar/AppbarAction
 * @uxpindescription A component used to display an action item in the appbar.
 * @uxpinnamespace Appbar
 */

const BackAction = (props) => {
  return <AppbarM.BackAction {...props} />;
};

BackAction.propTypes = {
  /**
   * Custom color for the back icon.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Optional icon size.
   */
  size: PropTypes.number,

  /**
   * Whether the button is disabled. Disabled buttons are greyed out and `onPress` is not triggered.
   */
  disabled: PropTypes.bool,

  /**
   * Accessibility label for the button. Defaults to 'Back'.
   * This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Custom style for the button container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Ref for the button.
   */
  ref: PropTypes.object,
};

export default BackAction;
