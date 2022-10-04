import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textTitle}>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
