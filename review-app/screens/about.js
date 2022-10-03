import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.textTitle}>About Screen</Text>
        <Button
          title="Go to ReviewDetail Screen"
          onPress={() => navigation.navigate("ReviewDetail")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
