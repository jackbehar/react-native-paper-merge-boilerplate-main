import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer/DrawerCollapsedItem/
 * @uxpindescription A collapsed drawer item that displays an icon and an optional label, suitable for navigation drawers.
 * @uxpinnamespace Drawer
 */
const Item = (props) => {
  const [active, setActive] = React.useState(props.active);

  // Toggle the active state without using a parameter
  const onButtonToggle = () => {
    setActive(!active); // This directly toggles the state based on its current value
  };

  // Synchronize internal state with external props
  React.useEffect(() => {
    setActive(props.active);
  }, [props.active]); // Only re-run the effect if props.active changes

  return (
    <Drawer.CollapsedItem {...props} active={active} onPress={onButtonToggle} />
  );
};

Item.propTypes = {
  active: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  disabled: PropTypes.bool,
  focusedIcon: PropTypes.string,
  label: PropTypes.string,
  labelMaxFontSizeMultiplier: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.object,
  testID: PropTypes.string,
  theme: PropTypes.object,
  unfocusedIcon: PropTypes.string,
};

export default Item;
