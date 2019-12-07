import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

class Cardapio extends React.Component {
  render() {
    return (
      <View>
        <Text>Cardapio</Text>

        <View styles={styles.conteudo}>
          <Text style={styles.titulo}>Comida 1</Text>
          <Text>Receita Receita Receita Receita Receita </Text>
          <Text>Preço: R$ 10,00</Text>
        </View>

        <View styles={styles.conteudo}>
          <Text style={styles.titulo}>Comida 1</Text>
          <Text>Receita Receita Receita Receita Receita </Text>
          <Text>Preço: R$ 10,00</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteudo : {
    marginBottom: 10
  },
  titulo: {
    fontSize: 20,
    color: 'red'
  },
})

export default Cardapio
