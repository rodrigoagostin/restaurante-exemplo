import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Imagem from './Imagem';
import Descricao from './Descricao';

const PratoDoDia = (props) => {
  return (
    <View>
      <Text style={styles.titulo}>
        Prato do dia
      </Text>
      
      <Imagem />
      <Descricao />
    </View>
  )
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 16,
    color: "#454545",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
    marginLeft: 5,
  }
});

export default PratoDoDia;