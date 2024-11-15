import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Menu as MenuM, PaperProvider, Button } from "react-native-paper";
import Item from "./Item/Item";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Menu
 * @uxpindescription Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const openMenu = () => setVisible(true);
 *
 *   const closeMenu = () => setVisible(false);
 *
 *   return (
 *     <PaperProvider>
 *       <View
 *         style={{
 *           paddingTop: 50,
 *           flexDirection: 'row',
 *           justifyContent: 'center',
 *         }}>
 *         <Menu
 *           visible={visible}
 *           onDismiss={closeMenu}
 *           anchor={<Button onPress={openMenu}>Show menu</Button>}>
 *           <Menu.Item onPress={() => {}} title="Item 1" />
 *           <Menu.Item onPress={() => {}} title="Item 2" />
 *           <Divider />
 *           <Menu.Item onPress={() => {}} title="Item 3" />
 *         </Menu>
 *       </View>
 *     </PaperProvider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 *
 * ### Note
 * When using `Menu` within a React Native's `Modal` component, you need to wrap all
 * `Modal` contents within a `PaperProvider` in order for the menu to show. This
 * wrapping is not necessary if you use Paper's `Modal` instead.
 */

const Menu = (props) => {
  return <MenuM {...props} />;
};

Menu.Item = Item;

Menu.propTypes = {
  children: PropTypes.node,
  /** Whether the Menu is currently visible. */
  visible: PropTypes.bool,
  /** The anchor to open the menu from. In most cases, it will be a button that opens the menu. */
  anchor: PropTypes.oneOf([PropTypes.object, PropTypes.func]),
  /** Whether the menu should open at the top of the anchor or at its bottom.
Applied only when anchor is a node, not an x/y position. */
  anchorPosition: PropTypes.oneOf(["top", "bottom"]),
  /** Extra margin to add at the top of the menu to account for translucent status bar on Android.
If you are using Expo, we assume translucent status bar and set a height for status bar automatically.
Pass `0` or a custom value to and customize it.
This is automatically handled on iOS. */
  statusBarHeight: PropTypes.number,
  /** Callback called when Menu is dismissed. The `visible` prop needs to be updated when this is called. */
  onDismiss: PropTypes.func,
  /** Accessibility label for the overlay. This is read by the screen reader when the user taps outside the menu. */
  overlayAccessibilityLabel: PropTypes.string,

  /** Style of menu's inner content.
   * @uxpincontroltype css
   */
  contentStyle: PropTypes.object,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Elevation level of the menu's content. Shadow styles are calculated based on this value. Default `backgroundColor` is taken from the corresponding `theme.colors.elevation` property. By default equals `2`.
@supported Available in v5.x with theme version 3 */
  elevation: PropTypes.oneOf(["0", "1", "2", "3", "4", "5"]),
  /** Mode of the menu's content.
- `elevated` - Surface with a shadow and background color corresponding to set `elevation` value.
- `flat` - Surface without a shadow, with the background color corresponding to set `elevation` value.

@supported Available in v5.x with theme version 3 */
  mode: PropTypes.oneOf(["flat", "elevated"]),
  /** @optional */
  theme: PropTypes.oneOf([
    PropTypes.oneOf([PropTypes.func, PropTypes.func]),
    PropTypes.oneOf([PropTypes.func, PropTypes.func]),
  ]),
  /** Inner ScrollView prop */
  keyboardShouldPersistTaps: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

export default Menu;
