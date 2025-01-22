import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button title="Click Me" onPress={handleClick} />
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