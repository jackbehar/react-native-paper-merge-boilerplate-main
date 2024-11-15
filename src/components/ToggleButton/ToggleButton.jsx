import React from "react";
import PropTypes from "prop-types";
import { ToggleButton as ToggleButtonM } from "react-native-paper";
import Group from "./Group/Group";
import Row from "./Row/Row";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ToggleButton
 * @uxpindescription Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.
 */

const ToggleButton = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return <ToggleButtonM {...props} status={status} onPress={onButtonToggle} />;
};

ToggleButton.Group = Group;
ToggleButton.Row = Row;

ToggleButton.propTypes = {
  /**
   * Icon to display for the ToggleButton.
   */
  icon: PropTypes.node,

  /**
   * Size of the icon.
   */
  size: PropTypes.number,

  /**
   * Custom text color for button.
   * @uxpincontroltype color
   */
  iconColor: PropTypes.string,

  /**
   * Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string, // Assuming ColorValue is a string

  /**
   * Whether the button is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Accessibility label for the ToggleButton. This is read by the screen reader when the user taps the button.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Value of button.
   */
  value: PropTypes.string,

  /**
   * Status of button.
   */
  status: PropTypes.oneOf(["checked", "unchecked"]),

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
   * Ref object for the view.
   */
  ref: PropTypes.object,

  /**
   * testID to be used on tests.
   */
  testID: PropTypes.string,
};

export default ToggleButton;
