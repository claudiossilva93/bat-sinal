import React, {useState} from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './BatFormStyle';
import batLogo from '../../../assets/bat-logo.png'

interface batFormProp{
  visible: boolean,
  handleClickHome: () => void
}

export function BatForm(props: batFormProp) {
  return (
    <View style={[styles.container, { display: props.visible ? 'flex' : 'none' }]}>
    <Image 
      source={batLogo}
      style={styles.image}
    />
    <View style={styles.containerText}>
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.inputer}/>
    </View>
    <View style={styles.containerText}>
      <Text style={styles.text}>Telefone</Text>
      <TextInput  style={styles.inputer}/>
    </View>
    <View style={styles.containerText}>
      <Text style={styles.text}>Endereço</Text>
      <TextInput  style={styles.inputer}/>
    </View>
    <View style={styles.containerText}>
      <Text style={styles.text}>Observação</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        style={styles.inputerTextArea}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={props.handleClickHome}>
      <Text style={styles.text}>Ativar Bat Sinal</Text>
    </TouchableOpacity>
  </View>
  );
}