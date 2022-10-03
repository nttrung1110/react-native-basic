import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import About from "./screens/about";
import Home from "./screens/home";
import ReviewDetail from "./screens/reviewDetail";

const Stack = createNativeStackNavigator();

// firstly, show splash screen waitting for all assets loaded
SplashScreen.preventAutoHideAsync();

export default function App() {
  // use custom font
  const [fontsLoaded] = useFonts({
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });

  // after all assets are loaded, hide splash screen --> show app screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerBackground: () => (
              <Image
                style={StyleSheet.absoluteFill}
                source={{
                  uri: "https://i.pinimg.com/564x/a6/9b/78/a69b78bc44d37a9f9cadffce14267ba8.jpg",
                }}
              />
            ),
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
