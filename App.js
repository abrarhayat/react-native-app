import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [displayText, setDisplayText] = useState("Hello From Abrar's App!");
  const [changed, setChanged] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{displayText}</Text>
      <Button title="Change Text"
        onPress={
          () => {
            changed
              ? setDisplayText("Hello from Abrar's App!")
              : setDisplayText("Abrar's App Changed!");
            setChanged(!changed);
          }
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
