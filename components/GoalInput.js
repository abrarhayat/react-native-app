import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (goalText) => {
        setEnteredGoal(goalText);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Goals" placeholderTextColor="#8c9f8c" style={styles.input} onChangeText={goalInputHandler} />
            {/* .bind() basically calls onAddGoal with the argument enteredGoal which is eventually passed on to App.js to addGoalHandler */}
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});

export default GoalInput;