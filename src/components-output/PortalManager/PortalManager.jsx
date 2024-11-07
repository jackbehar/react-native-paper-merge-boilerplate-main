import React from 'react';
import PropTypes from 'prop-types';
import { PortalManager as PortalManagerM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/PortalManager
* @uxpindescription Portal host is the component which actually renders all Portals.
*/


const PortalManager = (props) => {
  return <PortalManagerM {...props} />;
};

PortalManager.propTypes = {
  children: PropTypes.node,

};

PortalManager.defaultProps = {
  children: undefined,

};

export default PortalManager;