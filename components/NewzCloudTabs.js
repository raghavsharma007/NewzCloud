import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import CloudNavigation from "./CloudNavigation";
/**
 * App()
 * Purpose: This function is the NewzCloudTabs function which will return the View component
 * for display on the User Interface
 * Parameter(s):
 *  It takes 0 parameter
 * Precondition(s):
 * <1> imports React components
 * Returns: This function returns main <View> component
 */
export default function NewzCloudTabs() {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <CloudNavigation index={index} setIndex={setIndex} />}
    />
  );
}
