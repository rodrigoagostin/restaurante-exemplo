import React from 'react';
import { View, Image } from 'react-native';

const Imagem = (props) => {

  const { path, style } = props;

  return (
    <View>
      <Image
        source={path}
        style={style} />
    </View>
  )
};

export default Imagem;