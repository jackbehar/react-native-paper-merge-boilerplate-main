import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph as ParagraphM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Paragraph
* @uxpindescription Typography component for showing a paragraph.
* 
* <div class="screenshots">
*   <img src="screenshots/paragraph.png" />
* </div>
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Paragraph } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <Paragraph>Paragraph</Paragraph>
* );
* 
* export default MyComponent;
* ```
*/


const Paragraph = (props) => {
  return <ParagraphM {...props} />;
};

Paragraph.propTypes = {
  children: PropTypes.node,

};

Paragraph.defaultProps = {
  children: undefined,

};

export default Paragraph;