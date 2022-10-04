import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView>
      <Image
        style={styles.imgHeader}
        source={{
          uri: "https://i.pinimg.com/564x/a6/9b/78/a69b78bc44d37a9f9cadffce14267ba8.jpg",
        }}
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  imgHeader: {
    width: "100%",
    height: 40,
  },
});
