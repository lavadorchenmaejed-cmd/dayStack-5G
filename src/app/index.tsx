import { router } from "expo-router";
import { useState, useEffect} from "react";
import {
  KeyboardAvoidingView, //i position niya ang keyboard sa screen para di matabunan ang input
  Platform, 
  Pressable,
  StyleSheet, 
  Text, 
  TextInput, 
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Landing() {
  
  const [name, setName] = useState(""); //creates a variable name and starts as an empty string
  const canEnter = name.trim().length > 0; //.trim() removes extra spaces. Maka enter ra siya if ang value is greater than 0

  //runs everytime the name changes
 useEffect(() => {
  console.log("Name changed to:", name);
}, [name]);

  //mao ni ang function sa button na "Enter List"
  const enter = () => {
    if (!canEnter) return; //if the name is empty, dili maka enter
    router.push({ pathname: "/home", params: { name: name.trim() } }); //if dili empty ang name, mo adto siya sa home
  };

  return (
    <LinearGradient colors={["#0b1f1a", "#16352F", "#0b1f1a"]} style={{ flex: 1 }}>
      
     <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.center}
      >
        
        <Text style={styles.welcome}>Welcome to dayStack!</Text>
        <Text style={styles.muted}>Where you get to list your tasks temporarily</Text>

        <View>
          <TextInput
            value={name} //current value sa name
            onChangeText={setName} //updates the name whenever the user types
            onSubmitEditing={enter} //runs enter() when the user presses the keyboard's submit button 
            placeholder="what should we call you?"
            placeholderTextColor="#9fb3a8"
            maxLength={20}
            style={styles.input}
          />
        </View>


        <Pressable
          onPress={enter} //// Runs enter() when the button is pressed
          disabled={!canEnter}
          style={({ pressed }) => [ // Changes the button style depending on its state
            styles.btn,
            !canEnter && { opacity: 0.4 }, // Makes the button faded when disabled
            pressed && { transform: [{ scale: 0.97 }] }, // Makes the button slightly smaller while being pressed
          ]}
        >
          <Text style={styles.btnText}>Enter List →</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/developer")} // Navigate to the developer screen
          style={({ pressed }) => [
            { marginTop: 20 },
            pressed && { transform: [{ scale: 0.97 }] },
          ]}
        >
          <Text style={{ color: "#9fb3a8", fontSize: 16, textAlign: "center" }}>
            About the Developer
          </Text>
        </Pressable>

      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  },

  input: {
    minWidth: 160,
    color: "#D9A441",
    fontSize: 36,
    fontWeight: "700",
    borderBottomWidth: 2,
    borderBottomColor: "#D9A441",
    paddingHorizontal: 6,
    paddingVertical: 2,
    textAlign: "center",
    marginTop: 60,
  },
  welcome: { 
    color: "#E8DCC4", 
    fontSize: 70, 
    fontWeight: "600", 
    textAlign: "center",
    fontFamily: "serif",
  },
  muted: { 
    color: "#9fb3a8", 
    fontSize: 30, 
    marginTop: 13 
  },
  btn: {
    backgroundColor: "#D9A441",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    marginTop: 36,
  },
  btnText: { 
    color: "#0b1f1a", 
    fontSize: 18, 
    fontWeight: "800" 
  },
});
