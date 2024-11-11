import React from "react";
import PropTypes from "prop-types";
import { RadioButton as RadioButtonM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Checkbox/CheckboxIOS
 * @uxpindescription Checkboxes allow the selection of multiple options from a set. This component follows platform guidelines for iOS, but can be used on any platform.
 * @uxpinnamespace RadioButton
 */

const IOS = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return (
    <RadioButtonM.IOS {...props} status={status} onPress={onButtonToggle} />
  );
};

IOS.propTypes = {
  /**
   * Status of checkbox.
   */
  status: PropTypes.oneOf(["checked", "unchecked"]).isRequired,

  /**
   * Whether checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Custom color for checkbox
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /**
   * Additional styles for container View.
   * @uxpincontroltype css
   */
  style: PropTypes.object,
  /**
   * Theme for the component.
   */
  theme: PropTypes.object, // Assuming ThemeProp is an object

  /**
   * testID to be used on tests.
   */
  testID: PropTypes.string,
};

export default IOS;
