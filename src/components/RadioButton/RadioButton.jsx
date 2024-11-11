import React from "react";
import PropTypes from "prop-types";
import { RadioButton as RadioButtonM } from "react-native-paper";
import Item from "./Item/Item";
import Android from "./Android/Android";
import IOS from "./IOS/IOS";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/RadioButton
 * @uxpindescription Radio buttons allow the selection a single option from a set.
 */

const RadioButton = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return <RadioButtonM {...props} status={status} onPress={onButtonToggle} />;
};

RadioButton.Item = Item;
RadioButton.Android = Android;
RadioButton.IOS = IOS;

RadioButton.propTypes = {
  /** Value of Radio   */
  value: PropTypes.string,

  /** Status of Radio*/
  status: PropTypes.oneOf(["checked", "unchecked", "indeterminate"]),

  /** Disable Radio*/
  disabled: PropTypes.bool,

  /** Status of Radio*/
  onPress: PropTypes.func,
  /** Color of Radio
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** Color of checked Radio
   * @uxpincontroltype color
   */
  uncheckedColor: PropTypes.string,
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

export default RadioButton;
