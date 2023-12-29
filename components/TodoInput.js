import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const TodoInput = (props) => {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  function enterTodoText(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function onPress() {
    props.onTodoAdded(enteredTodoText);
    setEnteredTodoText("");
  }

  return (
    <View style={styles.flexForTodo}>
      <TextInput
        style={styles.textInput}
        onChangeText={enterTodoText}
        placeholder="Add Your Todo"
        placeholderTextColor={"gray"}
        value={enteredTodoText}
      />
      <Button title="Add Todo" color={"#304352"} onPress={onPress} />
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  flexForTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 5,
    padding: 10,
    borderRadius: 200,
    fontSize: 20,
  },
});
