import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton as RadioButtonM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/RadioButton
* @uxpindescription Radio buttons allow the selection a single option from a set.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { View } from 'react-native';
* import { RadioButton } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [checked, setChecked] = React.useState('first');
* 
*   return (
*     <View>
*       <RadioButton
*         value="first"
*         status={ checked === 'first' ? 'checked' : 'unchecked' }
*         onPress={() => setChecked('first')}
*       />
*       <RadioButton
*         value="second"
*         status={ checked === 'second' ? 'checked' : 'unchecked' }
*         onPress={() => setChecked('second')}
*       />
*     </View>
*   );
* };
* 
* export default MyComponent;
* ```
*/


const RadioButton = (props) => {
  return <RadioButtonM {...props} />;
};

RadioButton.propTypes = {
  children: PropTypes.node,
/** Value of the radio button */
  value: PropTypes.string,
  /** Status of radio button. */
  status: PropTypes.oneOf(['checked', 'unchecked']),
  /** Whether radio is disabled. */
  disabled: PropTypes.bool,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Custom color for unchecked radio. */
  uncheckedColor: PropTypes.string,
  /** Custom color for radio. */
  color: PropTypes.string,
  /** @optional */
  theme: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

RadioButton.defaultProps = {
  children: undefined,

};

export default RadioButton;