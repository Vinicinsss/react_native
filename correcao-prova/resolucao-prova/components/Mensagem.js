import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Mensagem({ texto }) {
  return (
    <View>
      <Text>
        {texto ? texto : 'Nenhum texto digitado ainda.'}
      </Text>
    </View>
  );
}
