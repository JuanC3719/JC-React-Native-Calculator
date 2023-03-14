import React, { useState, useCallback } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Keypad from './components/Keypad';


const MemoizedKeypad = React.memo(Keypad);

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = useCallback((value) => {
    setInput(input + value);
  }, [input]);

  const handleEqual = useCallback(() => {
    setInput(eval(input).toString());
  }, [input]);

  const handleClear = useCallback(() => {
    setInput('');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <TextInput style={styles.display} keyboardType="numeric" value={input} editable={false} />
        <MemoizedKeypad handleClear={handleClear} handleClick={handleClick} handleEqual={handleEqual} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  calculator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    marginTop: 50,
    width: '80%',
    height: 100,
    fontSize: 50,
    textAlign: 'right',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default App;
