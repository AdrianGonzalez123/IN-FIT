import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, StatusBar,
} from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import WelcomeScreen from './views/WelcomeScreen';
import ProfileScreen from './views/profile';
import SettingsScreen from './views/settings';
import ForgotPassword from './views/forgot_password';
import VerificationScreen from './views/verificacion';
import RegisterScreen from './views/RegisterScreen';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            secureTextEntry
          />

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>
              ¿Has olvidado tu contraseña?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate('Bienvenida')}
          >
            <Text style={styles.botonTexto}>Siguiente</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.link}>
              ¿No tienes cuenta todavía? Regístrate
            </Text>
          </TouchableOpacity>

          <Text style={styles.dividerText}>
            ─── O inicia sesión con ───
          </Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Verificacion" component={VerificationScreen} />
          <Stack.Screen name="Registro" component={RegisterScreen} />
          <Stack.Screen name="Bienvenida" component={WelcomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddbd1',
  },
  scrollContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: '#111114',
    backgroundColor: '#fff',
    width: 250,
    alignSelf: 'center',
  },
  boton: {
    backgroundColor: '#ef2b2d',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#007AFF',
    textAlign: 'center',
  },
  dividerText: {
    marginTop: 30,
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
});
