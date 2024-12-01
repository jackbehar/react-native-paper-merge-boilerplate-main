import React from 'react';
import PropTypes from 'prop-types';
import { FAB as FabM } from 'react-native-paper';
import Group from './Group/Group';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/FAB/
 * @uxpindescription A floating action button represents the primary action on a screen. It appears in front of all screen content.
 */

const FAB = (props) => {
  return <FabM {...props} />;
};

FAB.Group = Group;

FAB.propTypes = {
  /**
   * Icon to display for the FAB. Optional if `label` is defined.
   */
  icon: PropTypes.string,

  /**
   * Label for extended FAB. Optional if `icon` is defined.
   */
  label: PropTypes.string,

  /**
   * Make the label text uppercased.
   */
  uppercase: PropTypes.bool,

  /**
   * Background drawable configuration for feedback (Android only).
   */
  background: PropTypes.object,

  /**
   * Accessibility label for the FAB. Defaults to `label` if defined.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Accessibility state for the FAB.
   */
  accessibilityState: PropTypes.shape({
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    checked: PropTypes.oneOf([true, false, 'mixed']),
    busy: PropTypes.bool,
    expanded: PropTypes.bool,
  }),

  /**
   * Whether an icon change is animated.
   */
  animated: PropTypes.bool,

  /**
   * Deprecated: Whether FAB is mini-sized. Use `size="small"` instead.
   */
  small: PropTypes.bool,

  /**
   * Custom color for the icon and label of the FAB.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string,

  /**
   * Whether FAB is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Whether FAB is currently visible.
   */
  visible: PropTypes.bool,

  /**
   * Whether to show a loading indicator.
   */
  loading: PropTypes.bool,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Function to execute on long press.
   */
  onLongPress: PropTypes.func,

  /**
   * Delay in milliseconds before executing onLongPress.
   */
  delayLongPress: PropTypes.number,

  /**
   * Size of the FAB. Takes precedence over `customSize` if not defined.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Custom size for the FAB. Overrides `size` prop.
   */
  customSize: PropTypes.number,

  /**
   * Mode of the FAB, affects shadow appearance.
   */
  mode: PropTypes.oneOf(['flat', 'elevated']),

  /**
   * Variant for color mappings.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'surface']),

  /**
   * Specifies the largest possible scale a label font can reach.
   */
  labelMaxFontSizeMultiplier: PropTypes.number,

  /**
   * Custom style for the FAB container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Theme for the FAB.
   */
  theme: PropTypes.object,

  /**
   * Test ID used for testing purposes.
   */
  testID: PropTypes.string,

  /**
   * Ref object for the FAB component.
   */
  ref: PropTypes.shape({ current: PropTypes.any }),
};

export default FAB;
