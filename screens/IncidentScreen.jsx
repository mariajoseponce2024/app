import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
import { GlobalStateContext } from '../context/GlobalStateContext';
import IncidentInput from '../components/IncidentInput';
import PhotoPicker from '../components/IncidenPicker';

class IncidentScreen extends React.Component {
  static contextType = GlobalStateContext;

  handleToggle = (newValue) => {
    const { setGlobalState } = this.context;
    setGlobalState(prevState => ({ ...prevState, entrance: newValue }));
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={true}
      >
        {/* Este View es necesario para aplicar el estilo de alineación central */}
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Descripción del incidente:</Text>
          <IncidentInput />
          <PhotoPicker />
         
          <View style={styles.buttonContainer}>
            <SaveButton />
            <CancelButton />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%', 
    padding: 10,
    
  },
});

export default IncidentScreen;
