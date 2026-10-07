import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0b1f1a"},
        headerTintColor: "#E8DCC4",
        headerShadowVisible: false,
        headerShown: true,
        contentStyle: { backgroundColor: "#0b1f1a" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "dayStack" }} />
      <Stack.Screen name="home" options={{ title: "dayStack: To do list" }} />
      <Stack.Screen name="developer" options={{ title: "The Developer behind the App: 5G" }} />
    </Stack>
  );
}
