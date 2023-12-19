import { StyleSheet } from 'react-native';
import Colors from './Colors';

export  const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      paddingLeft:10,
      paddingRight:10,
      
    },
  root:{
     flexDirection:'row',
     width:'auto',
     justifyContent:'space-around',
     marginTop:15,
     shadowOffset: {width: -2, height: 4},  
     shadowColor: '#171717',  
     shadowOpacity: 0.2,  
     shadowRadius: 3,
     elevation: 3,
     height:'auto'
  },

    conscrol:{
      paddingLeft:10,
    },
    two:{
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,
      elevation: 3,

    },

    scrol: {
      width:250,
      height:160,
      borderRadius:5,
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,
      elevation: 3,
      flexDirection:'row',
       justifyContent:'space-evenly',
       
    },
  
    titleText1: {
        fontSize:20,
        padding:9,
        alignItems: 'center',
        fontWeight:'bold',
      },
      titleText2: {
        fontSize:15,
        padding:9,
      },
      profilStyle:{
        width:'100%',
        height:250,
        borderRadius:14,

      },

      profilStylelist:{
        width:'33%',
        height:120,
        borderRadius:5,
        marginTop:10,
        marginLeft:40,
      },
      info:{
        display:'flex',
        flexDirection:'column',
        float:'left',

      },
      infoItems:{
        width:'70%',
         flexDirection:'row',
        justifyContent:'space-evenly'

      },
  });