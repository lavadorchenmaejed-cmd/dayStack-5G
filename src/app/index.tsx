import { router } from "expo-router";
import { useState, useEffect} from "react";
import {
  KeyboardAvoidingView, 
  Platform, 
  Pressable,
  StyleSheet, 
  Text, 
  TextInput, 
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Landing() {
  const [name, setName] = useState("");
  const canEnter = name.trim().length > 0;
  
 useEffect(() => {
  console.log("Name changed to:", name);
}, [name]);
  
  const enter = () => {
    if (!canEnter) return;
    router.push({ pathname: "/home", params: { name: name.trim() } });
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
            value={name}
            onChangeText={setName}
            onSubmitEditing={enter}
            placeholder="what should we call you?"
            placeholderTextColor="#9fb3a8"
            maxLength={20}
            style={styles.input}
          />
        </View>


        <Pressable
          onPress={enter}
          disabled={!canEnter}
          style={({ pressed }) => [
            styles.btn,
            !canEnter && { opacity: 0.4 },
            pressed && { transform: [{ scale: 0.97 }] },
          ]}
        >
          <Text style={styles.btnText}>Enter List →</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/developer")}
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
