import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin } = useAuth();

  const handleLogin = async () => {
    try {
      const result = await onLogin(email, password);
      if (result.error) {
        // Asume que result tiene una propiedad 'error' y 'msg' cuando hay un error
        Alert.alert("Error de inicio de sesión", result.msg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error de inicio de sesión", "Ha ocurrido un problema al intentar iniciar sesión.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>¡Bienvenido!</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default LoginScreen;
