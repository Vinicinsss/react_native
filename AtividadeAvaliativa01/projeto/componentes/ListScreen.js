import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { auth, db } from '../src/config/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

export default function ListScreen() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'rentals'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRentals(data);
    });
    return () => unsub();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={rentals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.carText}>{item.carName}</Text>
            <Text>Cliente: {item.clientName}</Text>
            <Text>Valor: R$ {item.value}</Text>
            <Text>Data: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  carText: { fontSize: 18, fontWeight: 'bold', color: '#007bff' }
});