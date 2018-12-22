import { createStackNavigator, createAppContainer } from "react-navigation";
import firstPage from "./firstPage";
import secondPage from "./secondPage";

const App = createStackNavigator(
  {
    Home: { screen: firstPage },
    second: { screen: secondPage }
  },
  { initialRouteName: "Home", headerMode: "none" }
);

export default createAppContainer(App);

createAppContainer({
  Home: App
});
