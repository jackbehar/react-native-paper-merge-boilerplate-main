import React from 'react';
import PropTypes from 'prop-types';
import { List.Accordion as List.AccordionM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Accordion
* @uxpindescription A component used to display an expandable list item.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { List } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [expanded, setExpanded] = React.useState(true);
* 
*   const handlePress = () => setExpanded(!expanded);
* 
*   return (
*     <List.Section title="Accordions">
*       <List.Accordion
*         title="Uncontrolled Accordion"
*         left={props => <List.Icon {...props} icon="folder" />}>
*         <List.Item title="First item" />
*         <List.Item title="Second item" />
*       </List.Accordion>
* 
*       <List.Accordion
*         title="Controlled Accordion"
*         left={props => <List.Icon {...props} icon="folder" />}
*         expanded={expanded}
*         onPress={handlePress}>
*         <List.Item title="First item" />
*         <List.Item title="Second item" />
*       </List.Accordion>
*     </List.Section>
*   );
* };
* 
* export default MyComponent;
* ```
*/


const List.Accordion = (props) => {
  return <List.AccordionM {...props} />;
};

List.Accordion.propTypes = {
  children: PropTypes.node,
/** Title text for the list accordion. */
  title: PropTypes.object,
  /** Description text for the list accordion. */
  description: PropTypes.object,
  /** Callback which returns a React element to display on the left side. */
  left: PropTypes.func,
  /** Callback which returns a React element to display on the right side. */
  right: PropTypes.func,
  /** Whether the accordion is expanded
If this prop is provided, the accordion will behave as a "controlled component".
You'll need to update this prop when you want to toggle the component or on `onPress`. */
  expanded: PropTypes.bool,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Function to execute on long press. */
  onLongPress: PropTypes.func,
  /** The number of milliseconds a user must touch the element before executing `onLongPress`. */
  delayLongPress: PropTypes.number,
  
  /** @optional */
  theme: PropTypes.object,
  /** Type of background drawabale to display the feedback (Android).
https://reactnative.dev/docs/pressable#rippleconfig */
  background: PropTypes.object,
  /** Style that is passed to the wrapping TouchableRipple element. */
  style: PropTypes.object,
  /** Style that is passed to Title element. */
  titleStyle: PropTypes.object,
  /** Style that is passed to Description element. */
  descriptionStyle: PropTypes.object,
  /** Color of the ripple effect. */
  rippleColor: PropTypes.object,
  /** Truncate Title text such that the total number of lines does not
exceed this number. */
  titleNumberOfLines: PropTypes.number,
  /** Truncate Description text such that the total number of lines does not
exceed this number. */
  descriptionNumberOfLines: PropTypes.number,
  /** Specifies the largest possible scale a title font can reach. */
  titleMaxFontSizeMultiplier: PropTypes.number,
  /** Specifies the largest possible scale a description font can reach. */
  descriptionMaxFontSizeMultiplier: PropTypes.number,
  /** Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion. */
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable. */
  accessibilityLabel: PropTypes.string,
  /** `pointerEvents` passed to the `View` container */
  pointerEvents: PropTypes.object,
};

List.Accordion.defaultProps = {
  children: undefined,
titleNumberOfLines: 1,
descriptionNumberOfLines: 2,
pointerEvents: 'none',

};

export default List.Accordion;