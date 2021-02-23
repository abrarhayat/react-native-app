import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const addGoalHandler = (goalTitle) => {
    setAllGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), value: goalTitle }]);
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList keyExtractor={(item, index) => item.id} data={allGoals} renderItem={(itemData) =>
        <GoalItem title={itemData.item.value} />
      } />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 60,
    flex: 1,
    backgroundColor: 'rgba(0, 10, 2, 0.7)'
  }
});
