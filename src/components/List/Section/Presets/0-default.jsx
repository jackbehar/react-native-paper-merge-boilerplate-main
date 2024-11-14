import React from "react";
import Section from "../Section";
import Item from "../../Item/Item";

export default (
  <Section
    title="My List Title"
    titleStyle={{ fontWeight: "bold" }}
    uxpId="list-section-1"
  >
    <Item
      title="First Item"
      description="First Item description"
      uxpId="list-section-item-1"
    />
    <Item
      title="Second Item"
      description="Second Item description"
      uxpId="list-section-item-2"
    />
  </Section>
);
