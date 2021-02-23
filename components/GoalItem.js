import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GoalItem = props => {
    return (
        <View>
            <Text style={styles.listItems}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(0, 10, 2, 0.7)',
        borderColor: 'greenyellow',
        borderWidth: 1,
        color: 'greenyellow'
    }
});

export default GoalItem;