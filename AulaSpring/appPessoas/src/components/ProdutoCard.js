import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ProdutoCard({ produto, onPressDetalhes }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPressDetalhes} activeOpacity={0.85}>
      <View style={styles.linhaSuperior}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
      </View>
      <View style={styles.infoLinha}>
        <Ionicons name="cube-outline" size={14} color="#94a3b8" />
        <Text style={styles.info}>Qtd: {produto.quantidade}</Text>
        <Ionicons name="cash-outline" size={14} color="#94a3b8" style={{marginLeft: 10}} />
        <Text style={styles.info}>R$ {produto.valor.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', borderRadius: 16, padding: 16, marginBottom: 12, elevation: 2 },
  linhaSuperior: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  nome: { fontSize: 18, fontWeight: '700', color: '#0f172a', flex: 1 },
  infoLinha: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  info: { fontSize: 14, color: '#64748b' }
})