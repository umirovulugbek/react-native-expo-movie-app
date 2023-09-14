import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";
export default function Loader() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgb(15 23 42)"
      source={require("../../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    >
      {/* <Text>Loading...</Text> */}
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
