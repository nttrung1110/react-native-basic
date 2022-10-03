import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetail({ navigation, route }) {
  const { title, rating, body } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.textTitle}>{title}</Text>
        <Text style={globalStyles.textTitle}>{rating}</Text>
        <Text style={globalStyles.textTitle}>{body}</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
