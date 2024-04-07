// CancelButton.jsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

class CancelButton extends React.Component {
  static contextType = GlobalStateContext;

  render() {
    const { resetData } = this.context;

    return (
      <TouchableOpacity style={styles.button} onPress={resetData}>
        <Text style={styles.text}>Cancelar</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '50%',
    marginLeft: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
});

export default CancelButton;
