import React from 'react';
import PropTypes from 'prop-types';
import { Drawer.Section as Drawer.SectionM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer.Section
* @uxpindescription A component to group content inside a navigation drawer.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Drawer } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [active, setActive] = React.useState('');
* 
*   return (
*     <Drawer.Section title="Some title">
*       <Drawer.Item
*         label="First Item"
*         active={active === 'first'}
*         onPress={() => setActive('first')}
*       />
*       <Drawer.Item
*         label="Second Item"
*         active={active === 'second'}
*         onPress={() => setActive('second')}
*       />
*     </Drawer.Section>
*   );
* };
* 
* export default MyComponent;
* ```
*/


const Drawer.Section = (props) => {
  return <Drawer.SectionM {...props} />;
};

Drawer.Section.propTypes = {
  children: PropTypes.node,
/** Title to show as the header for the section. */
  title: PropTypes.string,
  
  /** Whether to show `Divider` at the end of the section. True by default. */
  showDivider: PropTypes.bool,
  /** Specifies the largest possible scale a title font can reach. */
  titleMaxFontSizeMultiplier: PropTypes.number,
  
/** @uxpincontroltype css */
style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

Drawer.Section.defaultProps = {
  children: undefined,
showDivider: true,

};

export default Drawer.Section;