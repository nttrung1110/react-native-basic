import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { globalStyles } from "../styles/globalStyles";

import Card from "../shared/card";
import ReviewDetailModal from "../modals/reviewDetailModal";
import AddReviewModal from "../modals/addReviewModal";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const [review, setReview] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [showAddReviewModal, setShowAddReviewModal] = useState(false);

  const handleAddReview = (data) => {
    setReviews((prev) => {
      prev.unshift(data);

      return prev;
    });
  };

  const handleDeleteReview = (key) => {
    setReviews((prev) => prev.filter((item) => item.key !== key));
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.moreBtn}>
        <TouchableOpacity
          onPress={() => {
            setShowAddReviewModal(true);
          }}
        >
          <MaterialIcons
            name="add"
            size={36}
            color="white"
            style={{ backgroundColor: "blue", borderRadius: 9999 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setReview(item);
              setShowModal(true);
            }}
          >
            <Card>
              <Text style={globalStyles.textTitle}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <AddReviewModal
        showAddReviewModal={showAddReviewModal}
        setShowAddReviewModal={setShowAddReviewModal}
        handleAddReview={handleAddReview}
      />

      <ReviewDetailModal
        data={review}
        showModal={showModal}
        setShowModal={setShowModal}
        handleDeleteReview={handleDeleteReview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  moreBtn: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
});
