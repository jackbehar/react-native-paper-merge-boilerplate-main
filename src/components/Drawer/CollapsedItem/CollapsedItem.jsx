import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer/DrawerCollapsedItem/
 * @uxpindescription A collapsed drawer item that displays an icon and an optional label, suitable for navigation drawers.
 * @uxpinnamespace Drawer
 */
const CollapsedItem = (props) => {
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

CollapsedItem.propTypes = {
  /** Indicates whether the item is active. */
  active: PropTypes.bool,

  /** Accessibility label for the button, read by screen readers. */
  accessibilityLabel: PropTypes.string,

  /** Badge to show on the icon; can be true to show a dot, string, or number to show text. */
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),

  /** Indicates whether the item is disabled. */
  disabled: PropTypes.bool,

  /** Icon to use when the item is focused; can be a string, an image source, or a React component. */
  focusedIcon: PropTypes.string,

  /** Label text of the item. */
  label: PropTypes.string,

  /** Specifies the largest possible scale a label font can reach. */
  labelMaxFontSizeMultiplier: PropTypes.number,

  /** Function to execute on press. */
  onPress: PropTypes.func,

  /** Style of the component. */
  style: PropTypes.object,

  /** Test ID used for testing purposes. */
  testID: PropTypes.string,

  /** Theme prop to apply custom theming. */
  theme: PropTypes.object,

  /** Icon to use when the item is unfocused; can be a string, an image source, or a React component. */
  unfocusedIcon: PropTypes.string,
};

export default CollapsedItem;
