//developer
// Static About page: 4 member profiles (edit the members array below)
import { LinearGradient } from "expo-linear-gradient";
import {
    Image,
    ImageSourcePropType,
    Text,
    View
} from "react-native";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: ImageSourcePropType;
};

const members: Member[] = [
  {
    name: "Chenmae Jed Lavador",
    role: "Project Lead",
    bio: "Leads the app design and keeps the team on schedule.",
    image: require("../../assets/images/gradpic.png"),
  },
  {
    name: "Jovan Arioja",
    role: "UI Designer",
    bio: "Designs the layouts, colors and overall look of the app.",
    image: require("../../assets/images/jovan.jpg"),
  },
  {
    name: "Jay Rabadon",
    role: "Developer",
    bio: "Builds the screens and connects the app to the API.",
    image: require("../../assets/images/jay.jpg"),
  },
  {
    name: "Elthone John Gilbuena",
    role: "Tester",
    bio: "Tests every screen and reports bugs before the demo.",
    image: require("../../assets/images/elthone.jpg"),
  },
];

export default function About() {
  return (
    <LinearGradient colors={["#0b1f1a", "#16352F", "#0b1f1a"]} style={{ flex: 1 }}>
        <View style={styles.grid}>
        {members.map((m) => (
          <View key={m.name} style={styles.card}>
            <View style={styles.row}>
              <Image source={m.image} style={styles.avatar} />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.h2}>{m.name}</Text>
                <Text style={styles.role}>{m.role}</Text>
              </View>
            </View>

            <Text style={[styles.muted, { 
              marginTop: 10, 
              lineHeight: 18, 
              textAlign: "center", 
              fontSize: 12 
              }]}>{m.bio}</Text>


          </View>
        ))}
        </View>
    </LinearGradient>
  );
}