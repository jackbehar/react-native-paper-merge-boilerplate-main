import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as IconButtonM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/IconButton
 * @uxpindescription An icon button is a button which displays only an icon without a label.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     iconColor={MD3Colors.error50}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */

const IconButton = (props) => {
  return <IconButtonM {...props} />;
};

IconButton.propTypes = {
  /** Icon to display. */
  icon: PropTypes.string,
  /** @supported Available in v5.x with theme version 3
Mode of the icon button. By default there is no specified mode - only pressable icon will be rendered. */
  mode: PropTypes.oneOf(['outlined', 'contained', 'contained-tonal']),
  /** @renamed Renamed from 'color' to 'iconColor' in v5.x
Color of the icon.
   * @uxpincontroltype color
*/
  iconColor: PropTypes.string,
  /** Background color of the icon container.
   * @uxpincontroltype color
   */
  containerColor: PropTypes.string,
  /** Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string,
  /** @supported Available in v5.x with theme version 3
Whether icon button is selected. A selected button receives alternative combination of icon and container colors. */
  selected: PropTypes.bool,
  /** Size of the icon. */
  size: PropTypes.number,
  /** Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch. */
  disabled: PropTypes.bool,
  /** Whether an icon change is animated. */
  animated: PropTypes.bool,
  /** Accessibility label for the button. This is read by the screen reader when the user taps the button. */
  accessibilityLabel: PropTypes.string,
  /** Function to execute on press. */
  onPress: PropTypes.func,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  ref: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** @optional */
  theme: PropTypes.object,
  /** Whether to show a loading indicator. */
  loading: PropTypes.bool,
};

export default IconButton;
