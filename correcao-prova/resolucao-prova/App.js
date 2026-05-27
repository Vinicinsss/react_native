import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Home from './components/Home';
import Mensagem from './components/Mensagem';

export default function App() {
  const [texto, setTexto] = useState('');
  return (
      <View>
        <Home />
        <TextInput
          placeholder="Digite seu texto"
          value={texto}
          onChangeText={setTexto} 
        />
        <Mensagem texto={texto} />
      </View>
  );
}