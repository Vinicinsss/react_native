import { StyleSheet } from 'react-native';

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  itemBox: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#555',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});