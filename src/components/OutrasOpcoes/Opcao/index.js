import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Opcao = (props) => {

  const { dado } = props;
  const PATH = { uri: dado.imagem };

  return (
    <View style={styles.container}>
      <View style={styles.precoContainer}>
        <Text style={styles.precoTexto}>R$ {dado.preco}</Text>
      </View>
      <Image
        style={styles.imagem}
        source={PATH}
      />
      <Text style={styles.titulo}>{dado.titulo}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderWidth: 10,
    borderColor: "#FFF",
  },
  precoContainer: {
    position: 'absolute',
    top: 20,
    right: 70,
    height: 45,
    width: 45,
    backgroundColor: 'red',
    zIndex: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  precoTexto: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  titulo: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Opcao;