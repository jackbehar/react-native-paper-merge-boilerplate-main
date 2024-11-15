import React from 'react';
import PropTypes from 'prop-types';
import { Drawer.CollapsedItem as Drawer.CollapsedItemM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer.CollapsedItem
* @uxpindescription Note: Available in v5.x with theme version 3
* 
* Collapsed component used to show an action item with an icon and optionally label in a navigation drawer.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Drawer } from 'react-native-paper';
* 
* const MyComponent = () => (
*    <Drawer.CollapsedItem
*      focusedIcon="inbox"
*      unfocusedIcon="inbox-outline"
*      label="Inbox"
*    />
* );
* 
* export default MyComponent;
* ```
*/


const Drawer.CollapsedItem = (props) => {
  return <Drawer.CollapsedItemM {...props} />;
};

Drawer.CollapsedItem.propTypes = {
  children: PropTypes.node,
/** The label text of the item. */
  label: PropTypes.string,
  /** Badge to show on the icon, can be `true` to show a dot, `string` or `number` to show text. */
  badge: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.bool]),
  /** Whether the item is disabled. */
  disabled: PropTypes.bool,
  /** @renamed Renamed from 'icon' to 'focusedIcon' in v5.x
Icon to use as the focused destination icon, can be a string, an image source or a react component */
  focusedIcon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** @renamed Renamed from 'icon' to 'focusedIcon' in v5.x
Icon to use as the unfocused destination icon, can be a string, an image source or a react component */
  unfocusedIcon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Whether to highlight the drawer item as active. */
  active: PropTypes.bool,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Specifies the largest possible scale a label font can reach. */
  labelMaxFontSizeMultiplier: PropTypes.number,
  /** Accessibility label for the button. This is read by the screen reader when the user taps the button. */
  accessibilityLabel: PropTypes.string,
  
/** @uxpincontroltype css */
style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

Drawer.CollapsedItem.defaultProps = {
  children: undefined,
badge: false,
testID: 'drawer-collapsed-item',

};

export default Drawer.CollapsedItem;