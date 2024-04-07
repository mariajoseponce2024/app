import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { GlobalStateContext } from '../context/GlobalStateContext';

const CustomCheckbox = ({ icon, title, checked, onChecked }) => {
  return (
    <View style={styles.checkboxContainer}>
      <Image source={icon} style={styles.icon} />
      <CheckBox
        title={title}
        checked={checked}
        onPress={onChecked}
        containerStyle={styles.checkbox}
        checkedColor="green"
      />
    </View>
  );
};

const AccesoriosCheckScreen = () => {
  const { neumaticos, matafuego, toggleNeumaticos, toggleMatafuego } = useContext(GlobalStateContext);

  return (
    <View style={styles.container}>
      <CustomCheckbox
        icon={require('../assets/neumaticos.png')} // Asegúrate de tener este asset.
        title="Neumáticos"
        checked={neumaticos}
        onChecked={toggleNeumaticos}
      />
      <CustomCheckbox
        icon={require('../assets/matafuego.png')} // Asegúrate de tener este asset.
        title="Matafuego"
        checked={matafuego}
        onChecked={toggleMatafuego}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginLeft: 0, // Elimina el margen por defecto
    padding: 0, // Elimina el relleno por defecto
  },
  icon: {
    width: 50, // Ajusta según el tamaño deseado
    height: 50, // Ajusta según el tamaño deseado
    marginRight: 10, // Espacio entre el ícono y el checkbox
  },
});

export default AccesoriosCheckScreen;
