import React, { Component } from 'react';
import { ScrollView, View, TextInput, Button, StyleSheet } from 'react-native';

class IncidentInput extends Component {
  constructor(props) {
    super(props);
    this.state = { description: '' };
  }

  handleDescriptionChange = (description) => {
    this.setState({ description });
  };

  submitDescription = () => {
    // Procesar la descripción aquí (p. ej., enviar a una API)
    console.log(this.state.description);
    this.setState({ description: '' }); // Limpiar después de enviar
  };

  render() {
    return (

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="..."
            value={this.state.description}
            onChangeText={this.handleDescriptionChange}
            multiline={true}
            scrollEnabled={true} // Permite el desplazamiento dentro del TextInput
          />
  
        </View>
        
  
    );
  }
}

const styles = StyleSheet.create({
  
  inputContainer: {
    width: '100%',
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1e4c77',
    marginTop: 20,
   
  },
  input: {
    maxHeight: 200, // Establece una altura máxima para el input
    textAlignVertical: 'top',
  },
});

export default IncidentInput;
