import React from 'react';
import PropTypes from 'prop-types';
import { Headline as HeadlineM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Headline
* @uxpindescription Typography component for showing a headline.
* 
* <div class="screenshots">
*   <img src="screenshots/headline.png" />
* </div>
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Headline } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Headline>Headline</Headline>
* );
* 
* export default MyComponent;
* ```
*/


const Headline = (props) => {
  return <HeadlineM {...props} />;
};

Headline.propTypes = {
  children: PropTypes.node,
style: PropTypes.object,
  
};

Headline.defaultProps = {
  children: undefined,

};

export default Headline;