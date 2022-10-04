import { FontAwesome } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import About from "../screens/about";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "About") {
            iconName = "info";
          } else if (route.name === "ReviewDetail") {
            iconName = "newspaper-o";
          }

          return <FontAwesome name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="ReviewDetail" component={ReviewDetail} />
    </Tab.Navigator>
  );
}
