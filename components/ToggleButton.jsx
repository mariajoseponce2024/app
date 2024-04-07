<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = ({ onValueChange }) => {
  const [isEntrance, setIsEntrance] = useState(true); // Estado inicial 'true' significa 'Entrada'

  const toggleSelection = () => {
    const newValue = !isEntrance;
    setIsEntrance(newValue);
    onValueChange(newValue);
  };

  return (
    <TouchableOpacity onPress={toggleSelection} style={[styles.button, isEntrance ? styles.buttonEntrance : styles.buttonExit]}>
      <View style={[styles.circle, isEntrance ? styles.circleLeft : styles.circleRight]} />
      <Text style={styles.text}>{isEntrance ? 'Entrada' : 'Salida'}</Text>
    </TouchableOpacity>
  );
};
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043

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
<<<<<<< HEAD
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
=======
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
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
});

export default ToggleButton;
