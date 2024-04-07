import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HistoryTable from '../components/HistoryTableComponent';

class HistoryIncidentScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryTable />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Esto es crucial para que el contenedor se expanda
    paddingTop: 50, // Añade un poco de espacio en la parte superior
  }
});

export default HistoryIncidentScreen;
