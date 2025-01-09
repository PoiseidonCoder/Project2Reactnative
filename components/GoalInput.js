import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const goalInputHandler = (event) => {
    setEnteredGoalText(event);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={enteredGoalText}
        placeholder="Your course goal!"
        onChangeText={(event) => goalInputHandler(event)}
      />
      <Button
        title="Add Goal"
        onPress={() => props.onAddGoal(enteredGoalText)}
      />
    </View>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
