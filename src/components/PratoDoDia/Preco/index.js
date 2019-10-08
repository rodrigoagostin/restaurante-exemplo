import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Preco = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.precoTexto}>R$ 32</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CC3737',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1
  },
  precoTexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  }
});

export default Preco;