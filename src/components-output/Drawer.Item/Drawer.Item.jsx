import React from 'react';
import PropTypes from 'prop-types';
import { Drawer.Item as Drawer.ItemM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer.Item
* @uxpindescription A component used to show an action item with an icon and a label in a navigation drawer.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Drawer } from 'react-native-paper';
* 
* const MyComponent = () => (
*    <Drawer.Item
*      style={{ backgroundColor: '#64ffda' }}
*      icon="star"
*      label="First Item"
*    />
* );
* 
* export default MyComponent;
* ```
*/


const Drawer.Item = (props) => {
  return <Drawer.ItemM {...props} />;
};

Drawer.Item.propTypes = {
  children: PropTypes.node,
/** The label text of the item. */
  label: PropTypes.string,
  /** Icon to display for the `DrawerItem`. */
  icon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Whether to highlight the drawer item as active. */
  active: PropTypes.bool,
  /** Whether the item is disabled. */
  disabled: PropTypes.bool,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Type of background drawabale to display the feedback (Android).
https://reactnative.dev/docs/pressable#rippleconfig */
  background: PropTypes.object,
  /** Accessibility label for the button. This is read by the screen reader when the user taps the button. */
  accessibilityLabel: PropTypes.string,
  /** Callback which returns a React element to display on the right side. For instance a Badge. */
  right: PropTypes.func,
  /** Specifies the largest possible scale a label font can reach. */
  labelMaxFontSizeMultiplier: PropTypes.number,
  /** Color of the ripple effect. */
  rippleColor: PropTypes.string,
  
/** @uxpincontroltype css */
style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

Drawer.Item.defaultProps = {
  children: undefined,

};

export default Drawer.Item;