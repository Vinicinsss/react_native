import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '../css/styles';

export default function CustomModalScreen({ animation, themeColor }) {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.screenContainer, { backgroundColor: themeColor + '10' }]}>
      <Text style={[styles.headerText, { color: themeColor }]}>
        Modo: {animation.toUpperCase()}
      </Text>
      
      <TouchableOpacity 
        style={[styles.mainButton, { backgroundColor: themeColor }]} 
        onPress={() => setVisible(true)}
      >
        <Text style={styles.buttonText}>ABRIR MODAL {animation.toUpperCase()}</Text>
      </TouchableOpacity>

      <Modal
        animationType={animation} 
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.modalCard}>
            <View style={[styles.colorIndicator, { backgroundColor: themeColor }]} />
            
            <Text style={styles.modalTitle}>Animação {animation}</Text>
            
            <Text style={styles.modalBody}>
              {animation === 'slide' && "Perceba como eu subi suavemente do fundo da tela."}
              {animation === 'fade' && "Perceba como eu surgi alterando a opacidade (transparência)."}
              {animation === 'none' && "Eu apareci instantaneamente, sem transição suave."}
            </Text>
            
            <TouchableOpacity 
              style={[styles.closeButton]} 
              onPress={() => setVisible(false)}
            >
              <Text style={styles.closeButtonText}>FECHAR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}