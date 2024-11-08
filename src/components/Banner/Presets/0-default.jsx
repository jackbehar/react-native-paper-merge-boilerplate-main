import React from "react";
import Banner from "../Banner";

export default (
  <Banner
    visible
    actions={[
      {
        label: "Fix it",
      },
      {
        label: "Learn more",
      },
    ]}
    uxpId="banner-1"
  >
    There was a problem processing a transaction on your credit card.
  </Banner>
);
