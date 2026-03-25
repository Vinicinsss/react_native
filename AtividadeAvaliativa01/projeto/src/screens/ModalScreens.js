import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
// Importando o estilo separado e apelidando de 'styles' para facilitar
import { modalStyles as styles } from '../styles/modalStyles'; 

const ModalDemo = ({ animationType, title }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button 
        title={`Abrir Modal (${animationType})`} 
        onPress={() => setModalVisible(true)} 
      />

      <Modal
        animationType={animationType}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Este é o comportamento: {animationType.toUpperCase()}
            </Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} color="#ff5c5c" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const ModalSlideScreen = () => <ModalDemo animationType="slide" title="Demonstração: Modal Slide" />;
export const ModalFadeScreen = () => <ModalDemo animationType="fade" title="Demonstração: Modal Fade" />;
export const ModalNoneScreen = () => <ModalDemo animationType="none" title="Demonstração: Modal None" />;