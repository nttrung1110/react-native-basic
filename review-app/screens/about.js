import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { globalStyles } from "../styles/globalStyles";

export default function About() {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textTitle}>About Screen</Text>
      <Button title="click" onPress={() => setShowModal(true)} />
      <Modal
        isVisible={showModal}
        swipeDirection={["up", "down"]}
        onSwipeComplete={() => setShowModal(false)}
        onBackButtonPress={() => setShowModal(false)}
        hideModalContentWhileAnimating
        useNativeDriverForBackdrop
        style={{ marginHorizontal: 0, marginBottom: 0 }}
      >
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
