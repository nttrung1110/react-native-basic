import { Button, Image, StyleSheet, Text, View } from "react-native";
import { images } from "../assets/images";
import Card from "../shared/card";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetail({ navigation, route }) {
  const data = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.textTitle}>{data?.title}</Text>
        <Text style={globalStyles.textTitle}>{data?.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[data?.rating]} />
        </View>
      </Card>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
