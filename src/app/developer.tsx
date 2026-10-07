import { LinearGradient } from "expo-linear-gradient"; 
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
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

const styles = StyleSheet.create({
  title: { 
    color: "#E8DCC4", 
    fontSize: 34, 
    fontWeight: "800", 
    fontStyle: "italic", 
    fontFamily: "serif" 
  },
  h2: { 
    color: "#E8DCC4", 
    fontSize: 18, 
    fontWeight: "700" 
  },
  muted: { 
    color: "#9fb3a8", 
    fontSize: 14 
  },
  role: { 
    color: "#D9A441", 
    fontWeight: "700" 
  },
  card: {
    backgroundColor: "rgba(232,220,196,0.08)",
    borderColor: "rgba(232,220,196,0.25)",
    borderWidth: 1,
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
    width: "48%",
    alignItems: "center",
  },
  grid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    maxWidth: 600, 
    width: "100%", 
    alignSelf: "center", 
    marginTop: 40,
},
  row: { 
    alignItems: "center", 
    gap: 10 
},
  avatar: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    borderWidth: 2, 
    borderColor: "#D9A441" 
},
});
