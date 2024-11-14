import React from "react";
import Menu from "../Menu";
import Item from "../Item/Item";
import Divider from "../../Divider/Divider";

export default (
  <Menu visible uxpId="menu-1">
    <Item title="Item 1" uxpId="menu-item-1" />
    <Item title="Item 2" uxpId="menu-item-2" />
    <Divider uxpId="menu-divider-1" />
    <Item title="Item 3" uxpId="menu-item-3" />
  </Menu>
);
