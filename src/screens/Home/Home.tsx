import React,{useState} from 'react';
import { View } from 'react-native';
import { styles } from './HomeStyle';
import { BatHome } from '../../components/BatHome';
import { BatForm } from '../../components/BatForm';

export function Home() {
  const [visibleHome, setVisibleHome] = useState(true);
  const [visibleForm, setVisibleForm] = useState(false);

  const handleVisibleForm = () =>{
    setVisibleHome(!visibleHome);
    setVisibleForm(!visibleForm);
  }

  return (
    <View style={styles.container}>
        <BatHome visible={visibleHome} handleClickActiveForm={handleVisibleForm}/>
        <BatForm visible={visibleForm} handleClickHome={handleVisibleForm}/>
    </View>
  );
}