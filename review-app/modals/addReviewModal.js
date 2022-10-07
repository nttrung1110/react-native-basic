import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Modal from "react-native-modal";
import * as yup from "yup";

import { globalStyles } from "../styles/globalStyles";

const reviewSchema = yup.object().shape({
  title: yup.string().required().min(10),
  body: yup.string().required(),
  rating: yup.number().moreThan(1).lessThan(5).required(),
});

const AddReviewModal = ({
  showAddReviewModal,
  setShowAddReviewModal,
  handleAddReview,
}) => {
  const [disabledHolder, setDisabledHolder] = useState(false);

  return (
    <Modal
      style={(globalStyles.container, { margin: 0 })}
      isVisible={showAddReviewModal}
      swipeDirection={["up", "down"]}
      onSwipeComplete={() => setShowAddReviewModal(false)}
      onBackButtonPress={() => setShowAddReviewModal(false)}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Add new review</Text>
          <Formik
            initialValues={{ title: "", body: "", rating: 0 }}
            validationSchema={reviewSchema}
            onSubmit={(values) => {
              handleAddReview(values);
              setShowAddReviewModal(false);
            }}
          >
            {({
              setFieldValue,
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Title</Text>
                  <View style={styles.input}>
                    <TextInput
                      onChangeText={handleChange("title")}
                      onBlur={handleBlur("title")}
                      value={values.title}
                      placeholder="Write your title"
                    />
                  </View>
                </View>
                <Text style={styles.errorMessage}>
                  {touched.title && errors.title}
                </Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Body</Text>

                  <View style={styles.input}>
                    <TextInput
                      style={{ maxHeight: 110 }}
                      onChangeText={handleChange("body")}
                      onBlur={handleBlur("body")}
                      value={values.body}
                      placeholder="Write your content"
                      multiline={true}
                    />
                  </View>
                </View>
                <Text style={styles.errorMessage}>
                  {touched.body && errors.body}
                </Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Rating</Text>
                  <View
                    style={{
                      width: 170,
                      borderBottomWidth: 1,
                    }}
                  >
                    <Picker
                      style={{ flex: 1 }}
                      selectedValue={values.rating}
                      onValueChange={(value) => setFieldValue("rating", value)}
                      mode="dropdown"
                      onFocus={() => setDisabledHolder(true)}
                      onBlur={() => {
                        values.rating === 0 && setDisabledHolder(false);
                      }}
                    >
                      <Picker.Item
                        label="Your rating"
                        value={null}
                        enabled={disabledHolder ? false : true}
                        style={{ color: "#aaa", fontSize: 14 }}
                      />
                      <Picker.Item label="1 rating" value={1} />
                      <Picker.Item label="2 rating" value={2} />
                      <Picker.Item label="3 rating" value={3} />
                      <Picker.Item label="4 rating" value={4} />
                      <Picker.Item label="5 rating" value={5} />
                    </Picker>
                  </View>
                </View>
                <Text style={styles.errorMessage}>
                  {touched.rating && errors.rating}
                </Text>

                <View style={styles.submit}>
                  <Button onPress={handleSubmit} title="Submit" />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddReviewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 24,
    color: "blue",
  },
  formContainer: {
    marginHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    width: "20%",
    fontSize: 20,
  },
  input: {
    width: "79%",
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  submit: {
    marginTop: 20,
  },
  errorMessage: {
    color: "crimson",
    fontSize: 12,
  },
});
