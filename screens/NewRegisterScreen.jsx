import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToggleButton from '../components/ToggleButton';
import VehicleQRScanner from '../components/VehicleQRScanner';
import PersonalQRScanner from '../components/PersonalQRScanner';
import VehicleCheckScreen from '../components/AccesoriosCheck';
import Remito from '../components/RemitoComponent';
import SaveButton from '../components/SaveButton';
import { GlobalStateContext } from '../context/GlobalStateContext';




function NewRegisterScreen() {

  const [entrance, setEntrance] = useState(true);
  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  const handleToggle = (newValue) => {
    setGlobalState(prevState => ({ ...prevState, entrance: newValue }));
  };


  //const handleToggle = (newValue) => {
    //setEntrance(newValue);
  //const entranceValue = newValue ? 'Entrada' : 'Salida';
        //console.log(entranceValue);
      //}

        //    axios.post('baseURL', { isEntrance: newValue })
    //   .then(response => {
    //     // Manejar respuesta
    //   })
    //   .catch(error => {
    //     // Manejar error
    //   });
    

  return (
    <View style={styles.container}>
      <ToggleButton onValueChange={handleToggle} />
      <VehicleQRScanner />
      <PersonalQRScanner />
      <VehicleCheckScreen />
      <Remito />
      <SaveButton />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
});

export default NewRegisterScreen;