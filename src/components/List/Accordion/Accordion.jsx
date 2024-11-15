import React from "react";
import PropTypes from "prop-types";
import { List as ListM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ListAccordion
 * @uxpindescription A component used to display an expandable list item.
 * @uxpinnamespace List
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
 *       </ListAccordion>
 *     </List.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const Accordion = (props) => {
  return (
    <ListM.Accordion
      {...props}
      left={() => props.left}
      right={() => props.right}
    />
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  /** Title text for the list accordion. */
  title: PropTypes.node,
  /** Description text for the list accordion. */
  description: PropTypes.node,
  /** Callback which returns a React element to display on the left side. */
  left: PropTypes.node,
  /** Callback which returns a React element to display on the right side. */
  right: PropTypes.node,
  /** Whether the accordion is expanded
If this prop is provided, the accordion will behave as a "controlled component".
You'll need to update this prop when you want to toggle the component or on `onPress`.
   * @uxpinbind onPress 0
*/
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
  /** Style that is passed to the wrapping TouchableRipple element.
   * @uxpincontroltype css
   */

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Style that is passed to Title element.
   *  @uxpincontroltype css
   */
  titleStyle: PropTypes.object,
  /** Style that is passed to Description element.
   *  @uxpincontroltype css
   */
  descriptionStyle: PropTypes.object,
  /** Color of the ripple effect.
   *  @uxpincontroltype color
   */
  rippleColor: PropTypes.string,
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
  /** Id is used for distinguishing specific accordion when using ListAccordionGroup. Property is required when using ListAccordionGroup and has no impact on behavior when using standalone ListAccordion. */
  id: PropTypes.string,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable. */
  accessibilityLabel: PropTypes.string,
  /** `pointerEvents` passed to the `View` container */
  pointerEvents: PropTypes.object,
};

export default Accordion;
