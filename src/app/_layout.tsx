import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#16352F",
        },

        headerShadowVisible: false,

        headerTintColor: "#E8DCC4",

        headerTitleStyle: {
          fontFamily: Platform.select({
            ios: "Georgia",
            android: "serif",
            default: "serif",
          }),
          fontSize: 21,
          fontWeight: "600",
          letterSpacing: 0.5,
          color: "#F5F0E6",
        },

        headerTitleAlign: "start",

        headerBackTitle: "Back",
      }}
    />
  );
}