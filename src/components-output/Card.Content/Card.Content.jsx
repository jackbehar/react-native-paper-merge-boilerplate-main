import React from 'react';
import PropTypes from 'prop-types';
import { Card.Content as Card.ContentM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card.Content
* @uxpindescription A component to show content inside a Card.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Card, Text } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Card>
*     <Card.Content>
*       <Text variant="titleLarge">Card title</Text>
*       <Text variant="bodyMedium">Card content</Text>
*     </Card.Content>
*   </Card>
* );
* 
* export default MyComponent;
* ```
*/


const Card.Content = (props) => {
  return <Card.ContentM {...props} />;
};

Card.Content.propTypes = {
  children: PropTypes.node,

  /** @internal */
  index: PropTypes.number,
  /** @internal */
  total: PropTypes.number,
  /** @internal */
  siblings: PropTypes.object,
  style: PropTypes.object,
};

Card.Content.defaultProps = {
  children: undefined,

};

export default Card.Content;