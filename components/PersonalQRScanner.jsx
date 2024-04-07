import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { GlobalStateContext } from '../context/GlobalStateContext';

const PersonalQRScanner = () => {
  const [image, setImage] = useState(null);
  const { personalQR, setGlobalState, personalQRChecked, togglePersonalQRChecked } = useContext(GlobalStateContext);

  const handleImageSelection = async (type) => {
    let result;
    if (type === 'library') {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else if (type === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImage(result.uri);
      setGlobalState(prevState => ({
        ...prevState,
        personalQR: result.uri,
        personalQRChecked: true,
      }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Scanner QR Personal</Text>
        <CheckBox
          checked={personalQRChecked}
          onPress={togglePersonalQRChecked}
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
  checkbox: {
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default PersonalQRScanner;
