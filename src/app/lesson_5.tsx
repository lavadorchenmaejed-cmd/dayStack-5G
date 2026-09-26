import {View, Text, Button} from "react-native";
import { router } from "expo-router";

const styles = {
  container: {
    flex: 1,
  },
};

    export default function Lesson1() {
  return (
    <View style={styles.container}>
      <Text>Lesson 1</Text>
        <Button
            title="Return to Home"
            onPress={() =>
                router.push({
                    pathname: "/",
                })
            }
        />
    </View>
  );
}   
