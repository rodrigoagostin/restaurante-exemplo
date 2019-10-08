import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Preco from '../Preco';

const Imagem = (props) => {
  const path = require('./prato_do_dia.jpg');

  return (
    <View>
      <Preco />
      <Image
        style={styles.imagem}
        source={path}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  imagem: {
    width: '100%',
    height: 300,
  }
})

export default Imagem;