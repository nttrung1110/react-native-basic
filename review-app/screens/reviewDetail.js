import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetail({ navigation, route }) {
  const data = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textTitle}>{data?.title}</Text>
      <Text style={globalStyles.textTitle}>{data?.rating}</Text>
      <Text style={globalStyles.textTitle}>{data?.body}</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
