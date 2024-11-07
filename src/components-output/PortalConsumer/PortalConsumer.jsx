import React from 'react';
import PropTypes from 'prop-types';
import { PortalConsumer as PortalConsumerM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/PortalConsumer
* @uxpindescription 
*/


const PortalConsumer = (props) => {
  return <PortalConsumerM {...props} />;
};

PortalConsumer.propTypes = {
  children: PropTypes.node,
manager: PropTypes.func,
  
};

PortalConsumer.defaultProps = {
  children: undefined,

};

export default PortalConsumer;