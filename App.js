// import { StatusBar } from "expo-status-bar";
import { useState } from "react"; //this usestate is an storage which stores the value.
import { StyleSheet, View, FlatList } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [todosList, setTodosList] = useState([]);

  function addTodoText(enteredTodoText) {
    if (enteredTodoText != "") {
      setTodosList([
        ...todosList,
        { text: enteredTodoText, id: Math.random().toString() },
      ]);
    }
  }

  function deleteHandler(id) {
    setTodosList(todosList.filter((todo) => todo.id != id));
  }

  return (
    <LinearGradient colors={["#304352", "#d7d2cc"]}>
      <View style={styles.container}>
        <TodoInput onTodoAdded={addTodoText} />
        {/* <ScrollView>
        {todosList.map((todo) => (
          <Text style={styles.todo} key={todo}>
            {todo}
          </Text>
        ))}
      </ScrollView> */}
        <FlatList
          data={todosList}
          style={styles.todosList}
          renderItem={(todoItem) => {
            return (
              <TodoItem
                text={todoItem.item.text}
                id={todoItem.item.id}
                onDelete={deleteHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 30,
    borderWidth: 1,
  },

  todosList: {
    height: "85%",
  },
});
