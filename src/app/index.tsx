import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const styles = {
  container: {
    flex: 1,
  },

  subject: {
    fontSize: 80,
    fontWeight: "bold" as const,
    marginBottom: 1,
    fontFamily: "serif" as const,
    fontStyle: "italic" as const,
  },

  teacher: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: -5,
  },
};

export default function Lesson() {
  return (
    <View style={styles.container}>

      <Text style={styles.subject}>
        Free Elec 104
      </Text>

      <Text style={styles.teacher}>
        Mr. Herold Bryan Omecillo
      </Text>

      <Button
        title="Lesson 1"
        onPress={() =>
          router.push({
            pathname: "/lesson_1",
          }) 
        }
      />

       <Button
        title="Lesson 2"
        onPress={() =>
          router.push({
            pathname: "/lesson_2",
          }) 
        }
      />

       <Button
        title="Lesson 3"
        onPress={() =>
          router.push({
            pathname: "/lesson_3",
          }) 
        }
      />

       <Button
        title="Lesson 4"
        onPress={() =>
          router.push({
            pathname: "/lesson_4",
          
          }) 
        }
      />

       <Button
        title="Lesson 5"
        onPress={() =>
          router.push({
            pathname: "/lesson_5",
          }) 
        }
      />

       <Button
        title="Lesson 6"
        onPress={() =>
          router.push({
            pathname: "/lesson_6",
          }) 
        }
      />
    </View>
  );
}