import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Keypad = ({ handleClick, handleClear, handleEqual }) => {
  const buttonConfig = [
    { label: '7', type: 'digit-button' },
    { label: '8', type: 'digit-button' },
    { label: '9', type: 'digit-button' },
    { label: '÷', type: 'operator-button', value: '/' },
    { label: '4', type: 'digit-button' },
    { label: '5', type: 'digit-button' },
    { label: '6', type: 'digit-button' },
    { label: '×', type: 'operator-button', value: '*' },
    { label: '1', type: 'digit-button' },
    { label: '2', type: 'digit-button' },
    { label: '3', type: 'digit-button' },
    { label: '-', type: 'operator-button', value: '-' },
    { label: '0', type: 'digit-button bottom-left-corner' },
    { label: '=', type: 'fun-button bottom-right-corner', onClick: handleEqual },
    { label: 'C', type: 'fun-button', onClick: handleClear },
    { label: '+', type: 'operator-button' },
  ];

  const gridConfig = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
  ];

  return (
    <View style={styles.keypad}>
      {gridConfig.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((buttonIndex) => {
            const { label, type, value, onClick } = buttonConfig[buttonIndex];
            return (
              <TouchableOpacity
                key={label}
                style={[styles.button, styles[type]]}
                onPress={() => handleClick(value || label)}
                {...(onClick ? { onPress: onClick } : null)}
              >
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keypad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  'digit-button': {
    backgroundColor: '#5D5D5D',
  },
  'operator-button': {
    backgroundColor: '#F2994A',
  },
  'fun-button': {
    backgroundColor: '#9B51E0',
  },
  'bottom-left-corner': {
    marginBottom: 10,
  },
  'bottom-right-corner': {
    marginRight: 10,
  },
});

export default Keypad;
