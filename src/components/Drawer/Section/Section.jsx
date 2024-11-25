import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer/DrawerSection/
 * @uxpindescription A component to group content inside a navigation drawer.
 * @uxpinnamespace Drawer
 */
const Section = (props) => {
  return <Drawer.Section {...props} />;
};

Section.propTypes = {
  /** Content of the Drawer.Section. */
  children: PropTypes.node.isRequired,

  /** Whether to show Divider at the end of the section. True by default. */
  showDivider: PropTypes.bool,

  /** Specifies the largest possible scale a title font can reach. */
  titleMaxFontSizeMultiplier: PropTypes.number,

  /** Title to show as the header for the section. */
  title: PropTypes.string,

  /** Style of the component. */
  style: PropTypes.object,

  /** Theme prop to apply custom theming. */
  theme: PropTypes.object,
};

export default Section;
