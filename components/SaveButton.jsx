// SaveButton.jsx
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStateContext } from '../context/GlobalStateContext';

const SaveButton = () => {
  const { saveData } = useContext(GlobalStateContext);

  return (
    <TouchableOpacity style={styles.button} onPress={saveData}>
      <Text style={styles.text}>Guardar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0094FC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '50%',
    alignSelf: 'center', // Ajuste para centrar el botón si es necesario
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default SaveButton;
