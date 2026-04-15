import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../src/config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function FormScreen({ navigation }) {
  const [carName, setCarName] = useState('');
  const [clientName, setClientName] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const handleSave = async () => {
    if (!carName || !clientName || !value || !date) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, 'rentals'), {
        carName,
        clientName,
        value,
        date,
        createdAt: new Date().toISOString()
      });
      Alert.alert("Sucesso", "Aluguel registrado!");
      navigation.navigate('List');
    } catch (error) {
      Alert.alert("Erro ao salvar", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Aluguel</Text>
      <TextInput style={styles.input} placeholder="Nome do Carro" value={carName} onChangeText={setCarName} />
      <TextInput style={styles.input} placeholder="Nome do Cliente" value={clientName} onChangeText={setClientName} />
      <TextInput style={styles.input} placeholder="Valor" keyboardType="numeric" value={value} onChangeText={setValue} />
      <TextInput style={styles.input} placeholder="Data (DD/MM/AAAA)" value={date} onChangeText={setDate} />
      
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Aluguel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});