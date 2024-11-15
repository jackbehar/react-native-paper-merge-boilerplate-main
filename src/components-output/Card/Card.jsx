import React from "react";
import PropTypes from "prop-types";
import { Card as CardM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card
 * @uxpindescription A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Text } from 'react-native-paper';
 *
 * const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
 *     <Card.Content>
 *       <Text variant="titleLarge">Card title</Text>
 *       <Text variant="bodyMedium">Card content</Text>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Card = (props) => {
  return <CardM {...props} />;
};

Card.propTypes = {
  children: PropTypes.node,
  /** Mode of the Card.
- `elevated` - Card with elevation.
- `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
- `outlined` - Card with an outline. */
  mode: PropTypes.oneOf(["elevated", "outlined", "contained"]),

  /** Function to execute on long press. */
  onLongPress: PropTypes.func,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Function to execute as soon as the touchable element is pressed and invoked even before onPress. */
  onPressIn: PropTypes.func,
  /** Function to execute as soon as the touch is released even before onPress. */
  onPressOut: PropTypes.func,
  /** The number of milliseconds a user must touch the element before executing `onLongPress`. */
  delayLongPress: PropTypes.number,
  /** If true, disable all interactions for this component. */
  disabled: PropTypes.bool,
  /** Changes Card shadow and background on iOS and Android. */
  elevation: PropTypes.oneOf(["0", "1", "2", "3", "4", "5", PropTypes.object]),
  /** Style of card's inner content.
   * @uxpincontroltype css
   */
  contentStyle: PropTypes.object,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** Pass down testID from card props to touchable */
  testID: PropTypes.string,
  /** Pass down accessible from card props to touchable */
  accessible: PropTypes.bool,
};

Card.defaultProps = {
  children: undefined,
  mode: "elevated",
  elevation: 1,
  testID: "card",
};

export default Card;
