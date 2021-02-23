import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (goalText) => {
    setEnteredGoal(goalText);
  }
  const [allGoals, setAllGoals] = useState([]);
  const addGoalHandler = () => {
    setAllGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Goals" placeholderTextColor="#8c9f8c" style={styles.input} onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={allGoals} renderItem={(itemData) =>
        <View>
          <Text style={styles.listItems}>{itemData.item.value}</Text>
        </View>
      } />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 60,
    flex: 1,
    backgroundColor: 'rgba(0, 10, 2, 0.7)'
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    color: 'greenyellow'
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(0, 10, 2, 0.7)',
    borderColor: 'greenyellow',
    borderWidth: 1,
    color: 'greenyellow'
  }
});
