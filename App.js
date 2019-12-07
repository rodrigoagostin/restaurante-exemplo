import React, { Component } from 'react'
import PratoDoDia from './src/components/PratoDoDia'

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import Propaganda from './src/components/Propaganda'
import OutrasOpcoes from './src/components/OutrasOpcoes'
import Cardapio from './src/components/Cardapio'

class App extends Component {

  state = {
    cardapio : false
  }

  render() {
    const { cardapio } = this.state

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>

          {!cardapio ? <View>
            <PratoDoDia/>
            <Propaganda/>
            <OutrasOpcoes/>
            <TouchableHighlight style={styles.cardapioBotaoFundo}
                                onPress={() =>
                                  this.setState({ cardapio : true })}>
              <Text style={styles.cardapioBotaoTexto}>Cardapio</Text>
            </TouchableHighlight>

          </View> : <Cardapio/>
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#E2E2E2',
  },
  content : {
    marginTop : 60,
    marginBottom : 60,
  },
  cardapioBotaoFundo : {
    backgroundColor : '#969696',
    padding : 10,
    alignItems : 'center',
    justifyContent : 'center'
  },
  cardapioBotaoTexto : {
    color : '#ffffff'
  }
})

export default App
