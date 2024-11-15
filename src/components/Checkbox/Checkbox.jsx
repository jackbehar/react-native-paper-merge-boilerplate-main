import React from "react";
import PropTypes from "prop-types";
import { Checkbox as CheckboxM } from "react-native-paper";
import Item from "./Item/Item";
import Android from "./Android/Android";
import IOS from "./IOS/IOS";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Checkbox/
 * @uxpindescription Checkboxes allow the selection of multiple options from a set.
 */

const Checkbox = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return <CheckboxM {...props} status={status} onPress={onButtonToggle} />;
};

Checkbox.Item = Item;
Checkbox.Android = Android;
Checkbox.IOS = IOS;

Checkbox.propTypes = {
  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Status of checkbox
   */
  status: PropTypes.oneOf(["checked", "unchecked", "indeterminate"]),

  /** Status of checkbox*/
  disabled: PropTypes.bool,

  /** Status of checkbox*/
  onPress: PropTypes.func,
  /** Color of checkbox
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** Color of checked checkbox
   * @uxpincontroltype color
   */
  uncheckedColor: PropTypes.string,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

export default Checkbox;
