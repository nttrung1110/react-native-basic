import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ handleAddTodo }) {
  const [input, setInput] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter new todo"
        value={input}
        onChangeText={setInput}
      />
      <Button
        style={styles.button}
        title="Add todo"
        color="coral"
        onPress={() => {
          setInput("");
          handleAddTodo(input);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "coral",
  },
});
