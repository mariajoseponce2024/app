import React from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { GlobalStateContext } from '../context/GlobalStateContext';

class Remito extends React.Component {
  static contextType = GlobalStateContext;

  pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets) {
        this.context.setGlobalState(prevState => ({
          ...prevState,
          remito: { ...prevState.remito, imageUri: response.assets[0].uri }
        }));
      }
    });
  };

  takeImage = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 }, (response) => {
      if (!response.didCancel && !response.errorCode && response.assets) {
        this.context.setGlobalState(prevState => ({
          ...prevState,
          remito: { ...prevState.remito, imageUri: response.assets[0].uri }
        }));
      }
    });
  };

  render() {
    const { remito } = this.context;

    return (
      <View style={styles.container}>
        <CheckBox
          title="Remito"
          checked={remito.checked}
          onPress={() => this.context.setGlobalState(prevState => ({
            ...prevState,
            remito: { ...prevState.remito, checked: !prevState.remito.checked }
          }))}
        />
        {remito.checked && (
          <View>
            <TextInput
              placeholder="Nº de remito"
              value={remito.number}
              onChangeText={(text) => this.context.setGlobalState(prevState => ({
                ...prevState,
                remito: { ...prevState.remito, number: text }
              }))}
              style={styles.input}
            />
            <Button title="Agregar Imagen" onPress={this.pickImage} />
            <Button title="Tomar Foto" onPress={this.takeImage} />
            {remito.imageUri && <Image source={{ uri: remito.imageUri }} style={styles.image} />}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default Remito;
