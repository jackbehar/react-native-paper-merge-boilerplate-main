import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar as SnackbarM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Snackbar
* @uxpindescription Snackbars provide brief feedback about an operation through a message rendered at the bottom of the container in which it's wrapped.
* 
* Note: To display it as a popup, regardless of the parent's position, wrap it with a `Portal` component – refer to the example in the "More Examples` section.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { View, StyleSheet } from 'react-native';
* import { Button, Snackbar } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [visible, setVisible] = React.useState(false);
* 
*   const onToggleSnackBar = () => setVisible(!visible);
* 
*   const onDismissSnackBar = () => setVisible(false);
* 
*   return (
*     <View style={styles.container}>
*       <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
*       <Snackbar
*         visible={visible}
*         onDismiss={onDismissSnackBar}
*         action={{
*           label: 'Undo',
*           onPress: () => {
*             // Do something
*           },
*         }}>
*         Hey there! I'm a Snackbar.
*       </Snackbar>
*     </View>
*   );
* };
* 
* const styles = StyleSheet.create({
*   container: {
*     flex: 1,
*     justifyContent: 'space-between',
*   },
* });
* 
* export default MyComponent;
* ```
*/


const Snackbar = (props) => {
  return <SnackbarM {...props} />;
};

Snackbar.propTypes = {
  children: PropTypes.node,
/** Whether the Snackbar is currently visible. */
  visible: PropTypes.bool,
  /** Label and press callback for the action button. It should contain the following properties:
- `label` - Label of the action button
- `onPress` - Callback that is called when action button is pressed. */
  action: PropTypes.oneOf([PropTypes.object, PropTypes.func]),
  /** @supported Available in v5.x with theme version 3
Icon to display when `onIconPress` is defined. Default will be `close` icon. */
  icon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** @supported Available in v5.x with theme version 3
Color of the ripple effect. */
  rippleColor: PropTypes.object,
  /** @supported Available in v5.x with theme version 3
Function to execute on icon button press. The icon button appears only when this prop is specified. */
  onIconPress: PropTypes.func,
  /** @supported Available in v5.x with theme version 3
Accessibility label for the icon button. This is read by the screen reader when the user taps the button. */
  iconAccessibilityLabel: PropTypes.string,
  /** The duration for which the Snackbar is shown. */
  duration: PropTypes.number,
  /** Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called. */
  onDismiss: PropTypes.func,
  
  /** @supported Available in v5.x with theme version 3
Changes Snackbar shadow and background on iOS and Android. */
  elevation: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', PropTypes.object]),
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
  /** Style for the wrapper of the snackbar */
  wrapperStyle: PropTypes.object,
  style: PropTypes.object,
  ref: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

Snackbar.defaultProps = {
  children: undefined,
iconAccessibilityLabel: 'Close icon',
duration: 7000,
elevation: 2,

};

export default Snackbar;