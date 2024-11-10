import React from "react";
import PropTypes from "prop-types";
import { ToggleButton as ToggleButtonM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ToggleButton
 * @uxpindescription Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.
 * @uxpinnamespace ToggleButton
 */

const Group = (props) => {
  const [value, setValue] = React.useState(props.value);

  const onButtonToggle = (value) => {
    setValue(value);
  };

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]); // Only re-run the effect if open prop changes

  return (
    <ToggleButtonM.Group
      {...props}
      onValueChange={onButtonToggle}
      value={value}
    />
  );
};

Group.propTypes = {
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
};

export default Group;
