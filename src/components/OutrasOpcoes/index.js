import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import dados from './dados.json';
import Opcao from './Opcao/index.js';

const OutrasOpcoes = () => {
  return (
    <View>
      <Text style={styles.titulo}>Outras opções</Text>

      {dados.map(dado => (
        <Opcao
          key={dado.id}
          dado={dado} />
      ))}

    </View>
  )
};

const styles = StyleSheet.create({
  titulo: {
    alignSelf: 'center',
    fontSize: 16,
    color: "#454545",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
    marginLeft: 5,
  }
});

export default OutrasOpcoes;