import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './BatHomeStyle';
import batLogo from '../../../assets/bat-logo.png';

interface batHomeProp{
  visible: boolean,
  handleClickActiveForm: () => void
}

export function BatHome(props: batHomeProp) {
  return (
    <View style={[styles.container, { display: props.visible ? 'flex' : 'none' }]}>
      <Image
          source={batLogo}
          style={{
              resizeMode: 'contain',
              height: 180
          }}
      />
      <TouchableOpacity style={styles.button} onPress={props.handleClickActiveForm}>
          <Text style={styles.text}>Ativar Bat Sinal</Text>
        </TouchableOpacity>
    </View>
  );
}