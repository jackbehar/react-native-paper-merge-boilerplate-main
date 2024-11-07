import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar as SearchbarM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Searchbar
* @uxpindescription Searchbar is a simple input box where users can type search queries.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Searchbar } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [searchQuery, setSearchQuery] = React.useState('');
* 
*   return (
*     <Searchbar
*       placeholder="Search"
*       onChangeText={setSearchQuery}
*       value={searchQuery}
*     />
*   );
* };
* 
* export default MyComponent;
* 
* ```
*/


const Searchbar = (props) => {
  return <SearchbarM {...props} />;
};

Searchbar.propTypes = {
  children: PropTypes.node,
/** Hint text shown when the input is empty. */
  placeholder: PropTypes.string,
  /** The value of the text input. */
  value: PropTypes.string,
  /** Callback that is called when the text input's text changes. */
  onChangeText: PropTypes.func,
  /** @supported Available in v5.x with theme version 3
Search layout mode, the default value is "bar". */
  mode: PropTypes.oneOf(['bar', 'view']),
  /** Icon name for the left icon button (see `onIconPress`). */
  icon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Custom color for icon, default will be derived from theme */
  iconColor: PropTypes.string,
  /** Color of the ripple effect. */
  rippleColor: PropTypes.object,
  /** Callback to execute if we want the left icon to act as button. */
  onIconPress: PropTypes.func,
  /** Callback to execute if we want to add custom behaviour to close icon button. */
  onClearIconPress: PropTypes.func,
  /** Accessibility label for the button. This is read by the screen reader when the user taps the button. */
  searchAccessibilityLabel: PropTypes.string,
  /** Custom icon for clear button, default will be icon close. It's visible when `loading` is set to `false`.
In v5.x with theme version 3, `clearIcon` is visible only `right` prop is not defined. */
  clearIcon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Accessibility label for the button. This is read by the screen reader when the user taps the button. */
  clearAccessibilityLabel: PropTypes.string,
  /** @supported Available in v5.x with theme version 3
Icon name for the right trailering icon button.
Works only when `mode` is set to "bar". It won't be displayed if `loading` is set to `true`. */
  traileringIcon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** @supported Available in v5.x with theme version 3
Custom color for the right trailering icon, default will be derived from theme */
  traileringIconColor: PropTypes.string,
  /** @supported Available in v5.x with theme version 3
Color of the trailering icon ripple effect. */
  traileringRippleColor: PropTypes.object,
  /** @supported Available in v5.x with theme version 3
Callback to execute on the right trailering icon button press. */
  onTraileringIconPress: PropTypes.func,
  /** Accessibility label for the right trailering icon button. This is read by the screen reader when the user taps the button. */
  traileringIconAccessibilityLabel: PropTypes.string,
  /** @supported Available in v5.x with theme version 3
Callback which returns a React element to display on the right side.
Works only when `mode` is set to "bar". */
  right: PropTypes.func,
  /** @supported Available in v5.x with theme version 3
Whether to show `Divider` at the bottom of the search.
Works only when `mode` is set to "view". True by default. */
  showDivider: PropTypes.bool,
  /** @supported Available in v5.x with theme version 3
Changes Searchbar shadow and background on iOS and Android. */
  elevation: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', PropTypes.object]),
  /** Set style of the TextInput component inside the searchbar */
  inputStyle: PropTypes.object,
  style: PropTypes.object,
  /** Custom flag for replacing clear button with activity indicator. */
  loading: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** @optional */
  theme: PropTypes.object,
};

Searchbar.defaultProps = {
  children: undefined,
mode: 'bar',
searchAccessibilityLabel: 'search',
clearAccessibilityLabel: 'clear',
showDivider: true,
elevation: 0,
loading: false,
testID: 'search-bar',

};

export default Searchbar;