import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  textTitle: { fontFamily: "NunitoBold", fontSize: 18 },
});
