import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
    const [nombre, setNombre] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [sexo, setSexo] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [objetivo, setObjetivo] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

            <Text style={styles.label}>Fecha de nacimiento</Text>
            <TextInput style={styles.input} value={fechaNacimiento} onChangeText={setFechaNacimiento} placeholder="DD/MM/AAAA" />

            <Text style={styles.label}>Sexo</Text>
            <View style={styles.sexoContainer}>
                <TouchableOpacity
                    style={[styles.sexoBtn, sexo === 'Hombre' && styles.sexoActivo]}
                    onPress={() => setSexo('Hombre')}
                >
                    <Text>Hombre</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sexoBtn, sexo === 'Mujer' && styles.sexoActivo]}
                    onPress={() => setSexo('Mujer')}
                >
                    <Text>Mujer</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Peso</Text>
            <TextInput style={styles.input} value={peso} onChangeText={setPeso} keyboardType="numeric" />

            <Text style={styles.label}>Altura</Text>
            <TextInput style={styles.input} value={altura} onChangeText={setAltura} keyboardType="numeric" />

            <Text style={styles.label}>Objetivo</Text>
            <Picker
                selectedValue={objetivo}
                onValueChange={(itemValue) => setObjetivo(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Selecciona un objetivo..." value="" />
                <Picker.Item label="Perder peso" value="perder" />
                <Picker.Item label="Ganar músculo" value="musculo" />
                <Picker.Item label="Mantenerme" value="mantener" />
            </Picker>

            <TouchableOpacity style={styles.boton}>
                <Text style={styles.botonTexto}>Siguiente</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { fontSize: 16, marginTop: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginTop: 5,
    },
    sexoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },

    sexoBtn: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        width: '48%',
        alignItems: 'center',
    },
    sexoActivo: { backgroundColor: '#fdd' },
    picker: { marginTop: 5 },
    boton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    botonTexto: { color: '#fff', fontWeight: 'bold' },
});

export default ProfileScreen;
