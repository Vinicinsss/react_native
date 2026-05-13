import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import api from '../services/api'
import ProdutoCard from '../components/ProdutoCard'

export default function ProdutoListScreen({ navigation }) {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  const carregarProdutos = async () => {
    try {
      const resposta = await api.get('/api/produtos')
      setProdutos(resposta.data)
    } catch (erro) {
      console.log(erro)
    } finally { setLoading(false) }
  }

  useFocusEffect(useCallback(() => { carregarProdutos() }, []))

  if (loading) return <ActivityIndicator size="large" style={{flex: 1}} />

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProdutoCard 
            produto={item} 
            onPressDetalhes={() => navigation.navigate('ProdutoDetail', { id: item.id })} 
          />
        )}
      />
      <TouchableOpacity 
        style={styles.botaoNovo} 
        onPress={() => navigation.navigate('ProdutoForm')}
      >
        <Text style={{color: '#fff', fontSize: 24}}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8fafc' },
  botaoNovo: { 
    position: 'absolute', right: 20, bottom: 20, 
    width: 56, height: 56, borderRadius: 28, 
    backgroundColor: '#2563eb', justifyContent: 'center', alignItems: 'center' 
  }
})