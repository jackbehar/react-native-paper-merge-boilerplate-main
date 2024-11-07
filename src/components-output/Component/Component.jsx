import React from 'react';
import PropTypes from 'prop-types';
import { Component as ComponentM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Component
* @uxpindescription Typography component showing styles complied with passed `variant` prop and supported by the type system.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Text } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <>
*     <Text variant="displayLarge">Display Large</Text>
*     <Text variant="displayMedium">Display Medium</Text>
*     <Text variant="displaySmall">Display small</Text>
* 
*     <Text variant="headlineLarge">Headline Large</Text>
*     <Text variant="headlineMedium">Headline Medium</Text>
*     <Text variant="headlineSmall">Headline Small</Text>
* 
*     <Text variant="titleLarge">Title Large</Text>
*     <Text variant="titleMedium">Title Medium</Text>
*     <Text variant="titleSmall">Title Small</Text>
* 
*     <Text variant="bodyLarge">Body Large</Text>
*     <Text variant="bodyMedium">Body Medium</Text>
*     <Text variant="bodySmall">Body Small</Text>
* 
*     <Text variant="labelLarge">Label Large</Text>
*     <Text variant="labelMedium">Label Medium</Text>
*     <Text variant="labelSmall">Label Small</Text>
*  </>
* );
* 
* export default MyComponent;
* ```
* 
* @extends Text props https://reactnative.dev/docs/text#props
*/


const Component = (props) => {
  return <ComponentM {...props} />;
};

Component.propTypes = {
  children: PropTypes.node,
/** @supported Available in v5.x with theme version 3

Variant defines appropriate text styles for type role and its size.
Available variants:

 Display: `displayLarge`, `displayMedium`, `displaySmall`

 Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`

 Title: `titleLarge`, `titleMedium`, `titleSmall`

 Label:  `labelLarge`, `labelMedium`, `labelSmall`

 Body: `bodyLarge`, `bodyMedium`, `bodySmall` */
  variant: PropTypes.oneOf([PropTypes.object, PropTypes.object]),
  
  theme: PropTypes.object,
  style: PropTypes.object,
};

Component.defaultProps = {
  children: undefined,

};

export default Component;