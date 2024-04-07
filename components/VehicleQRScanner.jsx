<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const VehicleQRScanner = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageSelection = async (type) => {
    let result;
    if (type === 'library') {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else if (type === 'camera') {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImage(result.uri);
      setIsChecked(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Scanner QR Vehículo</Text>
        <CheckBox
          center
          title=""
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkbox}
        />
      </View>

      <View style={styles.row}>
        <Button title="Agregar Imagen" onPress={() => handleImageSelection('library')} />
        <Button title="Tomar Foto" onPress={() => handleImageSelection('camera')} />
      </View>

    
      {image && (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
      )}
  </View>
    
  );
};
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043

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
<<<<<<< HEAD
    width: '100%',
=======
    width: '100%', // Asegura que los elementos hijos (botones y checkbox) se distribuyan a lo largo del ancho del contenedor
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
<<<<<<< HEAD
});

export default VehicleQRScanner;
=======
  checkbox: {
    marginVertical: 10,
    marginLeft: 10, // Añade un poco de margen para separar el texto del checkbox
  },
});

export default VehicleQRScanner;
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
