import { Button, Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { images } from "../assets/images";
import Card from "../shared/card";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetail({ data, showModal, setShowModal }) {
  const { title, body, rating } = data;

  return (
    <Modal
      style={globalStyles.container}
      isVisible={showModal}
      swipeDirection={["up", "down"]}
      onSwipeComplete={() => setShowModal(false)}
      onBackButtonPress={() => setShowModal(false)}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
    >
      <Card>
        <Text style={globalStyles.textTitle}>{title}</Text>
        <Text style={globalStyles.textTitle}>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      <View style={{ marginTop: 10 }}>
        <Button title="Go to Home Screen" onPress={() => setShowModal(false)} />
      </View>
    </Modal>
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
