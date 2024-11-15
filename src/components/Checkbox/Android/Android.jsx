import React from "react";
import PropTypes from "prop-types";
import { Checkbox as CheckboxM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Checkbox/CheckboxAndroid
 * @uxpindescription Checkboxes allow the selection of multiple options from a set. This component follows platform guidelines for Android, but can be used on any platform.
 * @uxpinnamespace Checkbox
 */

const Android = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return (
    <CheckboxM.Android {...props} status={status} onPress={onButtonToggle} />
  );
};

Android.propTypes = {
  /**
   * Status of checkbox.
   */
  status: PropTypes.oneOf(["checked", "unchecked", "indeterminate"]).isRequired,

  /**
   * Whether checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Custom color for unchecked checkbox.
   * @uxpincontroltype color
   */
  uncheckedColor: PropTypes.string,

  /**
   * Custom color for checkbox
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /**
   * Additional styles for container View.
   * @uxpincontroltype css
   */

  /** @uxpincontroltype css */
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

export default Android;
