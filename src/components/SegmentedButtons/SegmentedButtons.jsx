import React from 'react';
import PropTypes from 'prop-types';
import { SegmentedButtons as SegmentedButtonsM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/SegmentedButtons/
 * @uxpindescription Segmented buttons can be used to select options, switch views, or sort elements.
 */
const SegmentedButtons = (props) => {
  return <SegmentedButtonsM {...props} />;
};

SegmentedButtons.propTypes = {
  /** The currently selected value(s).
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),

  /** Callback function called when the value changes. */
  onValueChange: PropTypes.func,

  /** Array of button objects to display as options. Each object should contain:
   * - `value` (string): The value of the button.
   * - `label` (string): The label text of the button.
   * - `icon` (string): Icon to display for the item.
   * - `disabled` (boolean): Whether the button is disabled.
   * - `accessibilityLabel` (string): Accessibility label for the button.
   * - `checkedColor` (string): Custom color for checked text and icon.
   * - `uncheckedColor` (string): Custom color for unchecked text and icon.
   * - `onPress` (function): Callback that is called when the button is pressed.
   * - `showSelectedCheck` (boolean): Show optional check icon to indicate selected state.
   * - `style` (object): Additional styles for the button.
   * - `labelStyle` (object): Style for the button label text.
   * - `testID` (string): Test ID for testing purposes.
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
      icon: PropTypes.string,
      disabled: PropTypes.bool,
      accessibilityLabel: PropTypes.string,
      checkedColor: PropTypes.string,
      uncheckedColor: PropTypes.string,
      onPress: PropTypes.func,
      showSelectedCheck: PropTypes.bool,
      style: PropTypes.object,
      labelStyle: PropTypes.object,
      testID: PropTypes.string,
    })
  ).isRequired,

  /** Density is applied to the height, allowing usage in denser UIs. */
  density: PropTypes.oneOf(['regular', 'small', 'medium', 'high']),

  /** Additional styles for the segmented buttons container.
   *  @uxpincontroltype css
   */
  style: PropTypes.object,

  /** Theme prop to apply custom theming. */
  theme: PropTypes.object,
};

export default SegmentedButtons;
