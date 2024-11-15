import React from 'react';
import PropTypes from 'prop-types';
import { Card.Actions as Card.ActionsM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card.Actions
* @uxpindescription A component to show a list of actions inside a Card.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Card, Button } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Card>
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


const Card.Actions = (props) => {
  return <Card.ActionsM {...props} />;
};

Card.Actions.propTypes = {
  children: PropTypes.node,

  
/** @uxpincontroltype css */
style: PropTypes.object,
  theme: PropTypes.object,
};

Card.Actions.defaultProps = {
  children: undefined,

};

export default Card.Actions;