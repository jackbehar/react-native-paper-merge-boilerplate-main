import React from "react";
import PropTypes from "prop-types";
import { ToggleButton as ToggleButtonM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ToggleButton/ToggleButtonRow
 * @uxpindescription Toggle button row renders a group of toggle buttons in a row.
 * @uxpinnamespace ToggleButton
 */

const Row = (props) => {
  const [value, setValue] = React.useState(props.value);

  const onButtonToggle = (value) => {
    setValue(value);
  };

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]); // Only re-run the effect if open prop changes

  return (
    <ToggleButtonM.Row
      {...props}
      onValueChange={onButtonToggle}
      value={value}
    />
  );
};

Row.propTypes = {
  /**
   * React elements containing toggle buttons.
   */
  children: PropTypes.node,

  /**
   * Value of the currently selected toggle button.
   */
  value: PropTypes.string,

  /**
   * Function to execute on selection change.
   */
  onValueChange: PropTypes.func,

  style: PropTypes.object,
};

export default Row;
