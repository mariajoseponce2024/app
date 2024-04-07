import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const Remito = () => {
  const [remitoChecked, setRemitoChecked] = useState(false);
  const [remitoNumber, setRemitoNumber] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takeImage = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        title='Remito'
        checked={remitoChecked}
        onPress={() => setRemitoChecked(!remitoChecked)}
      />
      {remitoChecked && (
        <View>
          <TextInput
            placeholder="Nº de remito"
            value={remitoNumber}
            onChangeText={setRemitoNumber}
            style={styles.input}
          />
          <Button title="Agregar Imagen" onPress={pickImage} />
          <Button title="Tomar Foto" onPress={takeImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      )}
    </View>
  );
};

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