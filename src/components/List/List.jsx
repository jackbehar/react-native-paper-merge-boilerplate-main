import React from "react";
import PropTypes from "prop-types";
import Item from "./Item/Item";
import Accordion from "./Accordion/Accordion";
import AccordionGroup from "./AccordionGroup/AccordionGroup";
import Icon from "./Icon/Icon";
import Section from "./Section/Section";
import Image from "./Image/Image";
import Subheader from "./Subheader/Subheader";
/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Badge
 * @uxpindescription Badges are small status descriptors for UI elements.
 */

const List = (props) => {
  return <div>List Namespace</div>;
};

List.Item = Item;
List.Icon = Icon;
List.Accordion = Accordion;
List.AccordionGroup = AccordionGroup;
List.Section = Section;
List.Image = Image;
List.Subheader = Subheader;

List.propTypes = {
  // children: PropTypes.node,
};

export default List;
