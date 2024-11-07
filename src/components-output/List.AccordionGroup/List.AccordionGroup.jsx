import React from 'react';
import PropTypes from 'prop-types';
import { List.AccordionGroup as List.AccordionGroupM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.AccordionGroup
* @uxpindescription List.AccordionGroup allows to control a group of List Accordions. `id` prop for List.Accordion is required in order for group to work.
* List.AccordionGroup can be a controlled or uncontrolled component. The example shows the uncontrolled version.
* At most one Accordion can be expanded at a given time.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { View, Text } from 'react-native';
* import { List } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <List.AccordionGroup>
*     <List.Accordion title="Accordion 1" id="1">
*       <List.Item title="Item 1" />
*     </List.Accordion>
*     <List.Accordion title="Accordion 2" id="2">
*       <List.Item title="Item 2" />
*     </List.Accordion>
*     <View>
*       <Text>
*         List.Accordion can be wrapped because implementation uses React.Context.
*       </Text>
*       <List.Accordion title="Accordion 3" id="3">
*         <List.Item title="Item 3" />
*       </List.Accordion>
*     </View>
*   </List.AccordionGroup>
* );
* 
* export default MyComponent;
* ```
*/


const List.AccordionGroup = (props) => {
  return <List.AccordionGroupM {...props} />;
};

List.AccordionGroup.propTypes = {
  children: PropTypes.node,
/** Function to execute on selection change. */
  onAccordionPress: PropTypes.func,
  /** Id of the currently expanded list accordion */
  expandedId: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  
};

List.AccordionGroup.defaultProps = {
  children: undefined,

};

export default List.AccordionGroup;