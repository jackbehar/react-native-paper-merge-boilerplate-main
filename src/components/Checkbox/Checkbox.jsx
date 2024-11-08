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
  return <CheckboxM {...props} />;
};

Checkbox.Item = Item;
Checkbox.Android = Android;
Checkbox.IOS = IOS;

Checkbox.propTypes = {
  style: PropTypes.object,
  /** Status of checkbox
   * @uxpinbind onPress 0.target.value
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
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

export default Checkbox;
