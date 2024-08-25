import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button:{
    marginTop:5,
    alignItems:'center',
    width:'80%',
    justifyContent:'center',
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