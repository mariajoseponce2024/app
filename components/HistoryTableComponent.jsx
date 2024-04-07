import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SearchComponent from './SearchComponent';

class HistoryTable extends React.Component {
  // Suponiendo que 'data' podría ser tus datos estáticos o el estado inicial de tus datos
  state = {
    data: [
      { hora: '08:00', fecha: '2024-04-05', nombre: 'Automóvil 1' },
      { hora: '09:00', fecha: '2024-04-05', nombre: 'lutomóvil 2' },
      // Agrega más datos aquí
    ],
    filteredData: [],
    showMore: false, // Controla si se muestran más datos o no
  };


  componentDidMount() {
    this.setState({ filteredData: this.state.data }); // Inicializa los datos filtrados
  }

  handleSearch = (searchText) => {
    const filteredData = this.state.data.filter((item) => {
      // Puedes ajustar la lógica de filtrado según necesites
      const searchTerms = `${item.nombre} ${item.fecha} ${item.hora}`.toLowerCase();
      return searchTerms.includes(searchText.toLowerCase());
    });

    this.setState({ filteredData });
  };

  // Método para simular la carga de más datos
  loadMoreData = () => {
    // Aquí harías la llamada a tu backend para obtener más datos y actualizar el estado
    // Por ahora, solo cambiaré el estado de 'showMore' para simular
    this.setState({ showMore: true });
  };

  renderRow = ({ hora, fecha, nombre }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{hora}</Text>
      <Text style={styles.cell}>{fecha}</Text>
      <Text style={styles.cell}>{nombre}</Text>
    </View>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
            <View style={{ flex: 1 }}>
                <SearchComponent onSearch={this.handleSearch} />
            </View>
            <View style={styles.tableHeader}>
                <Text style={styles.headerCell}>Hora</Text>
                <Text style={styles.headerCell}>Fecha</Text>
                <Text style={styles.headerCell}>Nombre</Text>
            </View>
            {/* Cambia this.state.data por this.state.filteredData aquí */}
            {this.state.filteredData.map((item, index) => (
                // También asegúrate de llamar correctamente a renderRow como un método, no como un componente
                this.renderRow(item, index) // Cambio aquí
            ))}
            <TouchableOpacity onPress={this.loadMoreData} style={styles.button}>
                <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
            {this.state.showMore && (
                <Text style={styles.moreDataText}>Aquí se mostrarían más datos...</Text>
            )}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  moreDataText: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default HistoryTable;
