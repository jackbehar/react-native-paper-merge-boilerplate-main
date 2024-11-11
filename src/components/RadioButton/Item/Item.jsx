import React from "react";
import PropTypes from "prop-types";
import { RadioButton as RadioButtonM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Checkbox/CheckboxItem
 * @uxpindescription Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 * @uxpinnamespace RadioButton
 */

const Item = (props) => {
  const [status, setStatus] = React.useState(props.status);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // Only re-run the effect if open prop changes

  return (
    <RadioButtonM.Item {...props} status={status} onPress={onButtonToggle} />
  );
};

Item.propTypes = {
  /**
   * Value of the radio button.
   */
  value: PropTypes.string.isRequired,

  /**
   * Label to be displayed on the item.
   */
  label: PropTypes.string.isRequired,

  /**
   * Whether radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Type of background drawable to display the feedback (Android).
   */
  background: PropTypes.object, // Assuming PressableAndroidRippleConfig is an object

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Function to execute on long press.
   */
  onLongPress: PropTypes.func,

  /**
   * Accessibility label for the touchable. This is read by the screen reader when the user taps the touchable.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Custom color for unchecked radio.
   * @uxpincontroltype color
   */
  uncheckedColor: PropTypes.string,

  /**
   * Custom color for radio.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string, // Assuming ColorValue is a string

  /**
   * Status of radio button.
   */
  status: PropTypes.oneOf(["checked", "unchecked"]),

  /**
   * Additional styles for container View.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Style that is passed to Label element.
   * @uxpincontroltype css
   */
  labelStyle: PropTypes.object,

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
   * Specifies the largest possible scale a label font can reach.
   */
  labelMaxFontSizeMultiplier: PropTypes.number,

  /**
   * Theme for the component.
   */
  theme: PropTypes.object, // Assuming ThemeProp is an object

  /**
   * testID to be used on tests.
   */
  testID: PropTypes.string,

  /**
   * Radio button control position.
   */
  position: PropTypes.oneOf(["leading", "trailing"]),

  /**
   * Whether <RadioButton.Android /> or <RadioButton.IOS /> should be used.
   */
  mode: PropTypes.oneOf(["android", "ios"]),
};

export default Item;
