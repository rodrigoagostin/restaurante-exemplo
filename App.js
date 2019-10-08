import React, { Component } from 'react';
import PratoDoDia from './src/components/PratoDoDia';

import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Propaganda from './src/components/Propaganda';
import OutrasOpcoes from './src/components/OutrasOpcoes';

class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <PratoDoDia />
          <Propaganda />
          <OutrasOpcoes />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2',
  },
  content: {
    marginTop: 60,
    marginBottom: 60,
  }
});

export default App;