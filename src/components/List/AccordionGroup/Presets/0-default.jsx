import React from "react";
import AccordionGroup from "../AccordionGroup";
import Accordion from "../../Accordion/Accordion";
import Item from "../../Item/Item";

export default (
  <AccordionGroup expandedId="accordion-1" uxpId="list-accordiongroup-1">
    <Accordion
      title="List Accordion 1"
      id="accordion-1"
      uxpId="list-accordiongroup-accordion-1"
    >
      <Item title="First item" uxpId="list-accordiongroup-accordion-1-item-1" />
      <Item
        title="Second item"
        uxpId="list-accordiongroup-accordion-1-item-2"
      />
    </Accordion>
    <Accordion
      title="List Accordion 2"
      id="accordion-2"
      uxpId="list-accordiongroup-accordion-2"
    >
      <Item title="First item" uxpId="list-accordiongroup-accordion2-item-1" />
      <Item title="Second item" uxpId="list-accordiongroup-accordion2-item-2" />
    </Accordion>
  </AccordionGroup>
);
