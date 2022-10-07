import { Button, Image, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { images } from "../assets/images";
import Card from "../shared/card";
import { globalStyles } from "../styles/globalStyles";

export default function ReviewDetailModal({
  data,
  showModal,
  setShowModal,
  handleDeleteReview,
}) {
  const { title, body, rating, key } = data;

  return (
    <Modal
      style={(globalStyles.container, { margin: 0 })}
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 10,
          backgroundColor: "#fff",
        }}
      >
        <View>
          <Button
            title="Go to Home Screen"
            onPress={() => setShowModal(false)}
          />
        </View>
        <View>
          <Button
            title="Delete"
            color="red"
            onPress={() => {
              handleDeleteReview(key);
              setShowModal(false);
            }}
          />
        </View>
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
