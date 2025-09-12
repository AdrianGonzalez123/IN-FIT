import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProfileScreen from './views/profile';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={require('./assets/logos/logo_white_bg.svg')}
      />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Usuario o e-mail"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
        />


        <Text style={{
        flex: 0,
        marginBottom:30,
        }}>¿Has olvidado tu contraseña?</Text>


          <TouchableOpacity
              style={styles.boton}
              onPress={() => navigation.navigate('Perfil')}
          >
              <Text style={styles.botonTexto}>Siguiente</Text>
          </TouchableOpacity>


        <Text style={{
        flex:0,
        marginVertical:5,

        }}>
          ─── O inicia sesión con ───
        </Text>
      </SafeAreaView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Perfil" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeeeff',
    alignItems: 'center',
    justifyContent: 'flex-start', // empezamos desde arriba
    paddingTop: 60, // espacio desde el borde superior
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10, // menos espacio debajo del logo
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8, // menos padding vertical para subir texto
    paddingTop: 4, // sube aún más el placeholder
    width: '200',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#333',
    backgroundColor: '#fff',
    alignSelf: 'center',
    textAlignVertical: 'top', // Android: alinea texto arriba
  },
  subtitle: {
    color: '#666',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 20,


  },

    boton: {
    backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
},
        botonTexto: { color: '#fff', fontWeight: 'bold' },
});