import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Propaganda = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.propagandaTexto}>
        Central já é referência em gastronomia de qualidade em todo o
        vale do paraíba, é o lugar ideal para trazer os amigos e a família.
      </Text>
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  propagandaTexto: {
    fontSize: 20,
    fontWeight: '100',
    lineHeight: 25,
    padding: 20,
    textAlign: 'center',
  }
});

export default Propaganda;