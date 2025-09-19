// views/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Tu sesión ha comenzado correctamente.</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.botonTexto}>Ir al perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddbd1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555',
  },
  boton: {
    backgroundColor: '#ef2b2d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
