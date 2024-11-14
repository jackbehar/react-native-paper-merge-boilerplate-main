import React from "react";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import Accordion from "./Accordion/Accordion";
import AccordionGroup from "./AccordionGroup/AccordionGroup";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Badge
 * @uxpindescription Badges are small status descriptors for UI elements.
 */

const List = (props) => {
  return <div>List Namespace</div>;
};

List.Item = Item;
List.Accordion = Accordion;
List.AccordionGroup = AccordionGroup;

List.propTypes = {
  // children: PropTypes.node,
};

export default List;
