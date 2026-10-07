
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Task = { 
    id: string; 
    text: string; 
    done: boolean 
};

export default function Home() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const canAdd = task.trim().length > 0;
  const remaining = tasks.filter((t) => !t.done).length;

  const addTask = () => {
    if (!canAdd) return;
    setTasks((prev) => [{ id: Date.now().toString(), text: task.trim(), done: false }, ...prev]);
    setTask("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <LinearGradient colors={["#0b1f1a", "#16352F", "#0b1f1a"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hi, {name}!</Text>
        <Text style={styles.muted}>
          {tasks.length === 0
            ? "Nothing on your to do list yet"
            : `${remaining} of ${tasks.length} left to do`}
        </Text>

        <View style={styles.inputRow}>
          <TextInput
            value={task}
            onChangeText={setTask}
            onSubmitEditing={addTask}
            placeholder="add a task..."
            placeholderTextColor="#9fb3a8"
            style={styles.input}
            returnKeyType="done"
          />
          <Pressable
            onPress={addTask}
            disabled={!canAdd}
            style={({ pressed }) => [
              styles.addBtn,
              !canAdd && { opacity: 0.4 },
              pressed && { transform: [{ scale: 0.95 }] },
            ]}
          >
            <Text style={styles.addBtnText}>+</Text>
          </Pressable>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
              <Text style={styles.empty}>Add your first task above ✨</Text>
            
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Pressable style={styles.cardLeft} onPress={() => toggleTask(item.id)}>
                <View style={[styles.check, item.done && styles.checkDone]}>
                  {item.done && <Text style={styles.checkMark}>✓</Text>}
                </View>

                <Text style={[styles.taskText, item.done && styles.taskDone]}>
                  {item.text}
                </Text>
              </Pressable>

              <Pressable onPress={() => deleteTask(item.id)} hitSlop={10}>
                <Text style={styles.delete}>✕</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 15,
  },
  greeting: {
    color: "#E8DCC4",
    fontSize: 48,
    fontWeight: "600",
    fontFamily: "Times New Roman",
  },
  muted: {
    color: "#9fb3a8",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 28,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  input: {
    flex: 1,
    color: "#E8DCC4",
    fontSize: 18,
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(217,164,65,0.35)",
  },
  addBtn: {
    backgroundColor: "#D9A441",
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  addBtnText: {
    color: "#0b1f1a",
    fontSize: 30,
    fontWeight: "800",
    marginTop: -2,
  },