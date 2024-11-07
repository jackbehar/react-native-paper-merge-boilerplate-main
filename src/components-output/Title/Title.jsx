import React from 'react';
import PropTypes from 'prop-types';
import { Title as TitleM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Title
* @uxpindescription Typography component for showing a title.
* 
* <div class="screenshots">
*   <img src="screenshots/title.png" />
* </div>
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Title } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Title>Title</Title>
* );
* 
* export default MyComponent;
* ```
*/


const Title = (props) => {
  return <TitleM {...props} />;
};

Title.propTypes = {
  children: PropTypes.node,

};

Title.defaultProps = {
  children: undefined,

};

export default Title;