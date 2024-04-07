import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ToggleButton from '../components/ToggleButton';
import VehicleQRScanner from '../components/VehicleQRScanner';
import PersonalQRScanner from '../components/PersonalQRScanner';
import VehicleCheckScreen from '../components/AccesoriosCheck';
import Remito from '../components/RemitoComponen';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';
import { GlobalStateContext } from '../context/GlobalStateContext';

class NewRegisterScreen extends React.Component {
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
          <ToggleButton onValueChange={this.handleToggle} />
          <VehicleQRScanner />
          <PersonalQRScanner />
          <VehicleCheckScreen />
          <Remito />
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
    padding: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%', 
    padding: 10,
  },
});

export default NewRegisterScreen;
