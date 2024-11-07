import React from 'react';
import PropTypes from 'prop-types';
import { List.Section as List.SectionM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Section
* @uxpindescription A component used to group list items.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { List, MD3Colors } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <List.Section>
*     <List.Subheader>Some title</List.Subheader>
*     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
*     <List.Item
*       title="Second Item"
*       left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
*     />
*   </List.Section>
* );
* 
* export default MyComponent;
* ```
*/


const List.Section = (props) => {
  return <List.SectionM {...props} />;
};

List.Section.propTypes = {
  children: PropTypes.node,
/** Title text for the section. */
  title: PropTypes.string,
  
  /** @optional */
  theme: PropTypes.object,
  /** Style that is passed to Title element. */
  titleStyle: PropTypes.object,
  style: PropTypes.object,
};

List.Section.defaultProps = {
  children: undefined,

};

export default List.Section;