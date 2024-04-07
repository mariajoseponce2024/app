import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


class SearchComponent extends React.Component {
  state = {
    searchText: '',
  };

  handleChangeText = (text) => {
    this.setState({ searchText: text }, this.props.onSearch(text));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por nombre, fecha o hora..."
          onChangeText={this.handleChangeText}
          value={this.state.searchText}
        />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchComponent;
