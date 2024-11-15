import React from "react";
import PropTypes from "prop-types";
import { Checkbox as CheckboxM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Checkbox/CheckboxItem
 * @uxpindescription Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 * @uxpinnamespace Checkbox
 */

const Item = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return <CheckboxM.Item {...props} status={status} onPress={onButtonToggle} />;
};

Item.propTypes = {
  /**
   * Status of checkbox.
   */
  status: PropTypes.oneOf(["checked", "unchecked", "indeterminate"]).isRequired,
  /**
   * Checkbox control position.
   */
  position: PropTypes.oneOf(["leading", "trailing"]),

  /**
   * Whether <Checkbox.Android /> or <Checkbox.IOS /> should be used.
   */
  mode: PropTypes.oneOf(["android", "ios"]),
  /**
   * Whether checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Label to be displayed on the item.
   */
  label: PropTypes.string.isRequired,

  /**
   * Label text variant defines appropriate text styles for type role and its size.
   */
  labelVariant: PropTypes.oneOf([
    "displayLarge",
    "displayMedium",
    "displaySmall",
    "headlineLarge",
    "headlineMedium",
    "headlineSmall",
    "titleLarge",
    "titleMedium",
    "titleSmall",
    "labelLarge",
    "labelMedium",
    "labelSmall",
    "bodyLarge",
    "bodyMedium",
    "bodySmall",
  ]),

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Function to execute on long press.
   */
  onLongPress: PropTypes.func,

  /**
   * Type of background drawable to display the feedback (Android).
   */
  background: PropTypes.object, // Assuming PressableAndroidRippleConfig is an object

  /**
   * Accessibility label for the touchable. This is read by the screen reader when the user taps the touchable.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Custom color for unchecked checkbox.
   * @uxpincontroltype color
   */
  uncheckedColor: PropTypes.string,

  /**
   * Custom color for checkbox.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string,

  /**
   * Additional styles for container View.
   * @uxpincontroltype css
   */

  /** @uxpincontroltype css */
  style: PropTypes.object,

  /**
   * Specifies the largest possible scale a label font can reach.
   */
  labelMaxFontSizeMultiplier: PropTypes.number,

  /**
   * Style that is passed to Label element.
   * @uxpincontroltype css
   */
  labelStyle: PropTypes.object,

  /**
   * Theme for the component.
   */
  theme: PropTypes.object, // Assuming ThemeProp is an object

  /**
   * testID to be used on tests.
   */
  testID: PropTypes.string,
};

export default Item;
