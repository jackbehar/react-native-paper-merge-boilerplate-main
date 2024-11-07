import React from 'react';
import PropTypes from 'prop-types';
import { Switch as SwitchM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Switch
* @uxpindescription Switch is a visual toggle between two mutually exclusive states — on and off.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Switch } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
* 
*   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
* 
*   return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
* };
* 
* export default MyComponent;
* ```
*/


const Switch = (props) => {
  return <SwitchM {...props} />;
};

Switch.propTypes = {
  children: PropTypes.node,
/** Disable toggling the switch. */
  disabled: PropTypes.bool,
  /** Value of the switch, true means 'on', false means 'off'. */
  value: PropTypes.bool,
  /** Custom color for switch. */
  color: PropTypes.string,
  /** Callback called with the new value when it changes. */
  onValueChange: PropTypes.object,
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

Switch.defaultProps = {
  children: undefined,

};

export default Switch;