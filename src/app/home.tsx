
import { useLocalSearchParams } from "expo-router"; // Imports the function used to receive parameters from another screen.
import { useState, useEffect } from "react";
import {
  FlatList, // Displays a list efficiently.
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Defines what information one task must have.
type Task = { 
    id: string; 
    text: string; 
    done: boolean 
};

export default function Home() {
  const { name } = useLocalSearchParams<{ name: string }>();   // Gets the "name" parameter sent from the previous screen or the index.
  const [task, setTask] = useState("");   // Stores the text currently being typed in the input.
  const [tasks, setTasks] = useState<Task[]>([]); // Stores all of the tasks. It starts as an empty array.

  const canAdd = task.trim().length > 0;   // Checks if the input contains actual text. trim() removes extra spaces.

  //runs whenever a task is typed on the input box
useEffect(() => {
  console.log("New Task!", task);
}, [task]);

  
  const remaining = tasks.filter((t) => !t.done).length;   // Counts how many tasks are NOT completed.

   // Function for adding a new task.
  const addTask = () => {
    if (!canAdd) return;  // If the input is empty, stop the function.
    setTasks((prev) => [{ id: Date.now().toString(), // Creates a unique ID using the current time.
                         text: task.trim(), // Saves the task text.
                         done: false }, ...prev]);  // New tasks are not completed.
    setTask("");
  };
  // Function for marking a task as completed/uncompleted.
  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => // Goes through every task.
      (t.id === id ? { ...t, done: !t.done } : t))); // If this is the selected task, change its done value. If it is not the selected task, leave it unchanged.
  };

  //function for deleting task
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));    // Keeps every task except the one with the matching ID.
  };

  return (
    <LinearGradient colors={["#0b1f1a", "#16352F", "#0b1f1a"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hi, {name}!</Text>
        
        {/* 
          Below shows different text depending on whether there are tasks.
          If there are no tasks → "Nothing on your to do list yet"
          If there are tasks → shows how many are left.
        */}
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
                <View style={[styles.check, item.done && styles.checkDone]}> {/*this is the circular checkbox with its functions*/}
                  {item.done && <Text style={styles.checkMark}>✓</Text>}
                </View>

                <Text style={[styles.taskText, item.done && styles.taskDone]}> {/*if the task is done, adds a line through*/}
                  {item.text}
                </Text>
              </Pressable>

              {/* Button for deleting the task. */}
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
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D9A441",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  checkDone: {
     backgroundColor: "#D9A441" 
    },
  checkMark: {
     color: "#0b1f1a", 
     fontSize: 14, 
     fontWeight: "800" 
    },
  taskText: { 
    color: "#E8DCC4", 
    fontSize: 18, 
    flex: 1 
  },
  taskDone: { 
    textDecorationLine: "line-through", 
    opacity: 0.45 
  },
  delete: {
    color: "#9fb3a8", 
    fontSize: 18,  
    paddingLeft: 12 
  },
  empty: {
    color: "#9fb3a8",
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
});
