import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Descricao = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.descricaoTexto}>
        Sopa de legumes com carne picada
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descricaoTexto: {
    color: "#454545",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default Descricao;