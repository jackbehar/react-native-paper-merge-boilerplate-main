import React from 'react';
import PropTypes from 'prop-types';
import { Portal.Host as Portal.HostM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Portal.Host
* @uxpindescription Portal host renders all of its children `Portal` elements.
* For example, you can wrap a screen in `Portal.Host` to render items above the screen.
* If you're using the `Provider` component, it already includes `Portal.Host`.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Text } from 'react-native';
* import { Portal } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Portal.Host>
*     <Text>Content of the app</Text>
*   </Portal.Host>
* );
* 
* export default MyComponent;
* ```
* 
* Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
*/


const Portal.Host = (props) => {
  return <Portal.HostM {...props} />;
};

Portal.Host.propTypes = {
  children: PropTypes.node,

};

Portal.Host.defaultProps = {
  children: undefined,

};

export default Portal.Host;