import React from "react";
import PropTypes from "prop-types";
import { Menu as MenuM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Menu.Item
 * @uxpindescription A component to show a single list item inside a Menu.
 * @uxpinnamespace Menu
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Menu } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View style={{ flex: 1 }}>
 *     <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
 *     <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
 *     <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
 *     <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
 *     <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Item = (props) => {
  return <MenuM.Item {...props} />;
};

Item.propTypes = {
  children: PropTypes.node,
  /** Title text for the `MenuItem`. */
  title: PropTypes.object,
  /** @renamed Renamed from 'icon' to 'leadingIcon' in v5.x

Leading icon to display for the `MenuItem`. */
  leadingIcon: PropTypes.oneOf([
    PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    PropTypes.object,
    PropTypes.object,
  ]),
  /** @supported Available in v5.x with theme version 3

Trailing icon to display for the `MenuItem`. */
  trailingIcon: PropTypes.oneOf([
    PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    PropTypes.object,
    PropTypes.object,
  ]),
  /** Whether the 'item' is disabled. A disabled 'item' is greyed out and `onPress` is not called on touch. */
  disabled: PropTypes.bool,
  /** @supported Available in v5.x with theme version 3

Sets min height with densed layout. */
  dense: PropTypes.bool,
  /** Type of background drawabale to display the feedback (Android).
https://reactnative.dev/docs/pressable#rippleconfig */
  background: PropTypes.object,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Specifies the largest possible scale a title font can reach. */
  titleMaxFontSizeMultiplier: PropTypes.number,
  /** @optional */

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @uxpincontroltype css */
  contentStyle: PropTypes.object,
  /**  @uxpincontroltype css */
  titleStyle: PropTypes.object,
  /** Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** Accessibility label for the Touchable. This is read by the screen reader when the user taps the component. */
  accessibilityLabel: PropTypes.string,
  /** Accessibility state for the Touchable. This is read by the screen reader when the user taps the component. */
  accessibilityState: PropTypes.object,
};

export default Item;
