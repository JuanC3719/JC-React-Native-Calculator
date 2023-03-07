import React, { useState, useCallback } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Keypad from './components/Keypad';
import Header from './components/Header';

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
        <Header />
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
    backgroundColor: '#F5FCFF',
  },
  calculator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    width: '80%',
    height: 70,
    marginVertical: 20,
    fontSize: 40,
    textAlign: 'right',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default App;
