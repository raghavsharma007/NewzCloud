/**
 *  file: App.js
 *  authors: Neha Garg Raghav Sharma
 *  version: 1.0
 *  date-created: Feb-02-2022
 *  last-modified: April-10-2022
 */
import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { NewsContext } from "./API/Context";
import NewzCloudTabs from "./components/NewzCloudTabs";
/**
 * App()
 * Purpose: This function is the main App function which will return the View component
 * for display on the User Interface
 * Parameter(s):
 *  It doesnot takes any parameter
 * Precondition(s):
 * <1> imports React components
 * Returns: This function returns main <View> component
 */
function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <NewzCloudTabs />
    </View>
  );
}
/*This is the stylesheet that helps in displaying the layout on the scren and setting
 * the User Interface properties*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
