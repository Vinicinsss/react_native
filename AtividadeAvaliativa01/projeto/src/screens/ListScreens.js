import React from 'react';
import { View, Text, ScrollView, FlatList, SectionList } from 'react-native';
// Importando o estilo separado
import { listStyles as styles } from '../styles/listStyles';

export const ScrollViewScreen = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Item do ScrollView ${i + 1}`);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Demonstração: ScrollView</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.itemBox}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export const FlatListScreen = () => {
  const data = Array.from({ length: 50 }, (_, i) => ({ id: String(i), title: `Item da FlatList ${i + 1}` }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demonstração: FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export const SectionListScreen = () => {
  const sectionsData = [
    { title: 'Frutas', data: ['Maçã', 'Banana', 'Laranja', 'Uva'] },
    { title: 'Carnes', data: ['Picanha', 'Frango', 'Maminha'] },
    { title: 'Bebidas', data: ['Água', 'Suco', 'Refrigerante', 'Café'] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Demonstração: SectionList</Text>
      <SectionList
        sections={sectionsData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.headerText}>{title}</Text>
        )}
      />
    </View>
  );
};