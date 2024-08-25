import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      image:{
        resizeMode: 'contain',
        height: 80,
        width: 80,
        marginLeft:20
      },
      inputer: {
        width:'100%',
        backgroundColor:'#E5BF3C',
        color: 'black',
        fontSize:20,
        height: 40,
        borderWidth:1,
        borderRadius:5,
        padding:10
      },
      inputerTextArea: {
        width:'100%',
        backgroundColor:'#E5BF3C',
        color: 'black',
        fontSize:20,
        borderWidth:1,
        borderRadius:5,
        padding:10
      },
      containerText:{
        width:'90%'
      },
      button:{
        marginTop:5,
        alignItems:'center',
        width:'90%',
        paddingVertical:12,
        paddingHorizontal:32,
        borderRadius:4,
        elevation:3,
        backgroundColor:'black',
        borderColor: 'white',
        borderWidth: 1
      },
      text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight:'bold',
        letterSpacing: 0.25,
        color: '#E5BF3C'
      }
});