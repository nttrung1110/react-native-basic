import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

import Card from "../shared/card";
import ReviewDetail from "../modals/reviewModal";

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

  return (
    <View style={globalStyles.container}>
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

      <ReviewDetail
        data={review}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
