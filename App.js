import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState();
  const [courseGoals, setCourseGoals] = useState([]);
  const startAddHGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endGoalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((courseGoal) => {
        return courseGoal.id !== id;
      })
    );
  };
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => startAddHGoalHandler()} />
      {modalIsVisible && (
        <GoalInput
          onAddGoal={addGoalHandler}
          onEndGoal={endGoalHandler}
          visible={modalIsVisible}
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteGoal={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
  },
});
