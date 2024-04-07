import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

class CustomCheckBox extends React.Component {
  render() {
    const { icon, title, checked, onChecked } = this.props;
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
  }
}

const styles = StyleSheet.create({

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        width: 70, // Ajusta el ancho de la imagen
        height: 70, // Ajusta la altura de la imagen
        marginRight: 10,
    
      },
      checkbox: {
        marginLeft: 0,
        padding: 20,
      },
    
  });

export default CustomCheckBox;

