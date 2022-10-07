import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";

import Header from "./layout/header";
import { StatusBar } from "react-native";

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
        <StatusBar backgroundColor="#000" />
        <Header />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
