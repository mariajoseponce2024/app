import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

class ToggleButton extends React.Component {
  
  static contextType = GlobalStateContext;

  toggleSelection = () => {
    this.context.setEntrance(!this.context.entrance);
  };

  render() {
    const { entrance } = this.context;

    return (
      <TouchableOpacity
      onPress={this.toggleSelection}
      style={[styles.button, entrance ? styles.buttonEntrance : styles.buttonExit]}
    >
      <View style={[styles.circle, entrance ? styles.circleLeft : styles.circleRight]} />
      <Text style={styles.text}>{entrance ? 'Entrada' : 'Salida'}</Text>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden', 
  },
  buttonEntrance: {
    backgroundColor: 'green',
  },
  buttonExit: {
    backgroundColor: 'red',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    top: 5,
    backgroundColor: 'white',
  },
  circleLeft: {
    left: 5,
  },
  circleRight: {
    right: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
    zIndex: 1, 
    padding: 5
  },
});

export default ToggleButton;
