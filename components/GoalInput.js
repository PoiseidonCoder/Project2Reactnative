import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const goalInputHandler = (event) => {
    setEnteredGoalText(event);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="Your course goal!"
          onChangeText={(event) => goalInputHandler(event)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => props.onAddGoal(enteredGoalText)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                props.onEndGoal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
