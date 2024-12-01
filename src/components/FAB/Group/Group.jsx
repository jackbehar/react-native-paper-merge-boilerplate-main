import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { FAB as FabM, Portal } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/FAB/FABGroup
 * @uxpindescription A component to display a stack of FABs with related actions in a speed dial.
 * @uxpinnamespace FAB
 */

const Group = ({ children, closedIcon, uxpinRef, ...props }) => {
  const [state, setState] = React.useState({ open: props.open });

  React.useEffect(() => {
    setState({ open: props.open });
  }, [props.open]); // Synchronize internal state with prop

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  // Convert children to actions
  const actions = Children.toArray(children).map((child) => ({
    icon: child.props.icon,
    label: child.props.label,
    onPress: child.props.onPress,
    ...child.props, // Include any additional props passed to the child
  }));

  return (
    <div
      className='jackcss'
      style={{ width: '88px', height: '88px' }}
      ref={uxpinRef}
    >
      {/* <Portal> */}
      <FabM.Group
        {...props}
        open={open}
        onStateChange={onStateChange}
        actions={actions}
        icon={open ? props.icon : closedIcon ? closedIcon : props.icon}
      />
      {/* </Portal> */}
    </div>
  );
};

Group.propTypes = {
  /**
   * Action items to display in the form of a speed dial. Pass individual action components as children.
   */
  children: PropTypes.node,

  /**
   * Icon to display for the FAB. Can be toggled based on whether the speed dial is open.
   */
  icon: PropTypes.string,
  /**
   * Icon to display for the FAB when speed dial is closed.
   */
  closedIcon: PropTypes.string,

  /**
   * Accessibility label for the FAB.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Custom color for the FAB.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Custom backdrop color for the opened speed dial background.
   * @uxpincontroltype color
   */
  backdropColor: PropTypes.string,

  /**
   * Color of the ripple effect.
   * @uxpincontroltype color
   */
  rippleColor: PropTypes.string,

  /**
   * Function to execute on pressing the FAB.
   */
  onPress: PropTypes.func,

  /**
   * Whether the speed dial is open.
   */
  open: PropTypes.bool,

  /**
   * Callback called when the speed dial is opened or closed.
   */
  onStateChange: PropTypes.func,

  /**
   * Whether the FAB is currently visible.
   */
  visible: PropTypes.bool,

  /**
   * Style for the group container.
   */
  style: PropTypes.object,

  /**
   * Style for the FAB button.
   * @uxpincontroltype css
   */
  fabStyle: PropTypes.object,

  /**
   * Color mappings variant for combinations of container and icon colors.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'surface']),

  /**
   * Theme for the component.
   */
  theme: PropTypes.object,

  /**
   * Optional label for the FAB.
   */
  label: PropTypes.string,

  /**
   * Test ID for testing purposes.
   */
  testID: PropTypes.string,
};

export default Group;

/**
 * Example Action Component to use as a child.
 */
export const Action = ({ icon, label, onPress, ...props }) => {
  return null; // Render nothing; it's just for passing props to Group
};

Action.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string,
  onPress: PropTypes.func,
};
