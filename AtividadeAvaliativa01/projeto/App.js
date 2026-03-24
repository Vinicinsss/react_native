import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo!!!</Text>
      <Text>Utilize o menu de navegação para</Text>
      <Text>acessar as telas de modais e as listas com rolagem</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7592b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
