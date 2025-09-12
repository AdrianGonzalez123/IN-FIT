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

    const validarFecha = (text) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (text === '' || regex.test(text)) setFechaNacimiento(text);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

            <Text style={styles.label}>Fecha de nacimiento</Text>
            <TextInput
                style={styles.input}
                value={fechaNacimiento}
                onChangeText={validarFecha}
                placeholder="DD/MM/AAAA"
                keyboardType="numeric"
            />

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

            <Text style={styles.label}>Peso y Altura</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.inputSmall]}
                    value={peso}
                    onChangeText={setPeso}
                    keyboardType="numeric"
                    placeholder="Peso (kg)"
                />
                <View style={styles.alturaContainer}>
                    <TextInput
                        style={[styles.input, styles.inputSmall]}
                        value={altura}
                        onChangeText={setAltura}
                        keyboardType="numeric"
                        placeholder="Altura"
                    />
                    <Text style={styles.unit}>cm</Text>
                </View>
            </View>

            <Text style={styles.label}>Objetivo</Text>
            <View style={styles.objetivoContainer}>
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
            </View>

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
        height: 40,
    },
    inputSmall: {
        width: 100,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    alturaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    sexoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        width:250,
    },
    sexoBtn: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        width: '48%',
        alignItems: 'center',
    },
    sexoActivo: { backgroundColor: '#fdd' },
    picker: { marginTop: 5 },
    objetivoContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginTop: 5,
        overflow: 'hidden',
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

export default ProfileScreen;
