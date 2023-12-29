import { StyleSheet, Text, Pressable } from "react-native";

const todoItem = (props) => {
  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <Pressable onPress={deleteHandler}>
      <Text style={styles.todo}>{props.text}</Text>
    </Pressable>
  );
};

export default todoItem;

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    textAlign: "center",
    backgroundColor: "#304352",
    marginVertical: 5,
    borderRadius: 200,
    fontSize: 20,
    color: "white",
  },
});
