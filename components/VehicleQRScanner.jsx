import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { GlobalStateContext } from '../context/GlobalStateContext';
import CheckBox from '@react-native-community/checkbox'; 

class VehicleQRScanner extends React.Component {
  static contextType = GlobalStateContext; 

  pickImage = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        this.updateImageState(response.assets[0].uri);
      }
    });
  };

  takeImage = () => {
    launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      quality: 1,
    }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        this.updateImageState(response.assets[0].uri);
      }
    });
  };

  updateImageState = (uri) => {
    this.context.setGlobalState(prevState => ({
      ...prevState,
      vehicleQR: uri,
      vehicleQRChecked: true, 
    }));
  };

  render() {

    const { vehicleQR, vehicleQRChecked, toggleVehicleQRChecked, clearVehicleQR } = this.context;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
        <Text>Scanner Vehiculo</Text>
        <CheckBox
            value={vehicleQRChecked}
            onValueChange={toggleVehicleQRChecked}
            disabled={true} // Hace el checkbox solo de lectura
          />
        </View>

        <View style={styles.row}>
        <Button title="Agregar Imagen" onPress={this.pickImage} />
<Button title="Tomar Foto" onPress={this.takeImage} />
      </View>

        {vehicleQR && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: vehicleQR }} style={styles.image} />
            <Button title="Quitar Imagen" onPress={clearVehicleQR} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default VehicleQRScanner;
