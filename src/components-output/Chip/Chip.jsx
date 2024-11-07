import React from 'react';
import PropTypes from 'prop-types';
import { Chip as ChipM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Chip
* @uxpindescription Chips are compact elements that can represent inputs, attributes, or actions.
* They can have an icon or avatar on the left, and a close button icon on the right.
* They are typically used to:
* <ul>
*  <li>Present multiple options </li>
*  <li>Represent attributes active or chosen </li>
*  <li>Present filter options </li>
*  <li>Trigger actions related to primary content </li>
* </ul>
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Chip } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
* );
* 
* export default MyComponent;
* ```
*/


const Chip = (props) => {
  return <ChipM {...props} />;
};

Chip.propTypes = {
  children: PropTypes.node,
/** Mode of the chip.
- `flat` - flat chip without outline.
- `outlined` - chip with an outline. */
  mode: PropTypes.oneOf(['flat', 'outlined']),
  
  /** Icon to display for the `Chip`. Both icon and avatar cannot be specified. */
  icon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Avatar to display for the `Chip`. Both icon and avatar cannot be specified. */
  avatar: PropTypes.object,
  /** Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified. */
  closeIcon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Whether chip is selected. */
  selected: PropTypes.bool,
  /** Whether to style the chip color as selected.
Note: With theme version 3 `selectedColor` doesn't apply to the `icon`.
      If you want specify custom color for the `icon`, render your own `Icon` component. */
  selectedColor: PropTypes.string,
  /** @supported Available in v5.x with theme version 3
Whether to display overlay on selected chip */
  showSelectedOverlay: PropTypes.bool,
  /** Whether to display default check icon on selected chip.
Note: Check will not be shown if `icon` is specified. If specified, `icon` will be shown regardless of `selected`. */
  showSelectedCheck: PropTypes.bool,
  /** Color of the ripple effect. */
  rippleColor: PropTypes.object,
  /** Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch. */
  disabled: PropTypes.bool,
  /** Type of background drawabale to display the feedback (Android).
https://reactnative.dev/docs/pressable#rippleconfig */
  background: PropTypes.object,
  /** Accessibility label for the chip. This is read by the screen reader when the user taps the chip. */
  accessibilityLabel: PropTypes.string,
  /** Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon. */
  closeIconAccessibilityLabel: PropTypes.string,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Function to execute on long press. */
  onLongPress: PropTypes.func,
  /** Function to execute as soon as the touchable element is pressed and invoked even before onPress. */
  onPressIn: PropTypes.func,
  /** Function to execute as soon as the touch is released even before onPress. */
  onPressOut: PropTypes.func,
  /** Function to execute on close button press. The close button appears only when this prop is specified. */
  onClose: PropTypes.func,
  /** The number of milliseconds a user must touch the element before executing `onLongPress`. */
  delayLongPress: PropTypes.number,
  /** @supported Available in v5.x with theme version 3
Sets smaller horizontal paddings `12dp` around label, when there is only label. */
  compact: PropTypes.bool,
  /** @supported Available in v5.x with theme version 3
Whether chip should have the elevation. */
  elevated: PropTypes.bool,
  /** Style of chip's text */
  textStyle: PropTypes.object,
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** Pass down testID from chip props to touchable for Detox tests. */
  testID: PropTypes.string,
  /** Ellipsize Mode for the children text */
  ellipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
  accessibilityRole: PropTypes.any,
};

Chip.defaultProps = {
  children: undefined,
mode: 'flat',
selected: false,
showSelectedOverlay: false,
showSelectedCheck: true,
disabled: false,
closeIconAccessibilityLabel: 'Close',
elevated: false,
testID: 'chip',
accessibilityRole: 'button',

};

export default Chip;