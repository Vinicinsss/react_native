import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import api from '../services/api'

export default function ProdutoFormScreen({ navigation, route }) {
  const id = route.params?.id
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [valor, setValor] = useState('')

  useEffect(() => {
    if (id) {
      api.get(`/api/produtos/${id}`).then(res => {
        setNome(res.data.nome)
        setQuantidade(String(res.data.quantidade))
        setValor(String(res.data.valor))
      })
    }
  }, [id])

  const salvar = async () => {
    const payload = { nome, quantidade: parseInt(quantidade), valor: parseFloat(valor) }
    try {
      if (id) await api.put(`/api/produtos/${id}`, payload)
      else await api.post('/api/produtos', payload)
      navigation.goBack()
    } catch (erro) { console.log(erro) }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Quantidade" value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Valor" value={valor} onChangeText={setValor} keyboardType="numeric" />
      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
  botao: { backgroundColor: '#2563eb', padding: 15, alignItems: 'center', borderRadius: 8 }
})