import * as React from "react";
import { Card } from "../Card";
import { Title } from "../Title/Title";
import { Content } from "../Content/Content";

export default (
  <Card uxpId="card-1">
    <Title uxpId="card-title-1" title="Card Title" subtitle="Card Subtitle" />
    <Content uxpId="card-content-1">Card Content</Content>
  </Card>
);
