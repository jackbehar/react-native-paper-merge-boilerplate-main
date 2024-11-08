import React from "react";
import BottomNavigation from "../BottomNavigation";

export default (
  <BottomNavigation
    uxpId="BottomNavigation-1"
    navigationState={{
      index: 1,
      routes: [
        {
          key: "music",
          title: "Favorites",
          focusedIcon: "heart",
          unfocusedIcon: "heart-outline",
        },
        { key: "albums", title: "Albums", focusedIcon: "album" },
        { key: "recents", title: "Recents", focusedIcon: "history" },
        {
          key: "notifications",
          title: "Notifications",
          focusedIcon: "bell",
          unfocusedIcon: "bell-outline",
        },
      ],
    }}
  />
);
