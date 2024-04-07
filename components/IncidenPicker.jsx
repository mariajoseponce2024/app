import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GlobalStateContext } from '../context/GlobalStateContext';

class PhotoPicker extends Component {
  
  static contextType = GlobalStateContext;

  pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets) {
        this.context.setGlobalState(prevState => ({
          ...prevState,
          incident: { ...prevState.incident, imageUri: response.assets[0].uri }
        }));
      }
    });
  };

  takeImage = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets) {
        this.context.setGlobalState(prevState => ({
          ...prevState,
          incident: { ...prevState.incident, imageUri: response.assets[0].uri }
        }));
      }
    });
  };

  render() {
    const { incident } = this.context; 

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Adjunte o tome foto del incidente:</Text>
        <View style={styles.buttonContainer}>
          <Button title="Agregar imagen" onPress={this.pickImage} />
          <View style={styles.space} />
          <Button title="Tomar foto" onPress={this.takeImage} />
        </View>
        {incident.imageUri && (
          <Image source={{ uri: incident.imageUri }} style={styles.image} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Agrega un margen debajo de los botones
  },
  button: {
    // Eliminamos la propiedad width: '100%', ya que ya no es necesaria
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  space: {
    width: 20,
  },
});

export default PhotoPicker;
