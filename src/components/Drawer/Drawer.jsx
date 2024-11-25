import React from 'react';
import PropTypes from 'prop-types';
import CollapsedItem from './CollapsedItem/CollapsedItem';
import Item from './Item/Item';
import Section from './Section/Section';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer/DrawerCollapsedItem/
 * @uxpindescription Drawer namespace component.
 */

const Drawer = (props) => {
  return <div>Drawer Namespace</div>;
};

Drawer.CollapsedItem = CollapsedItem;
Drawer.Item = Item;
Drawer.Section = Section;

Drawer.propTypes = {
  // children: PropTypes.node,
};

export default Drawer;
