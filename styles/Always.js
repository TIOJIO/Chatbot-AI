import { StyleSheet } from 'react-native';
import Colors from './Colors';

export  const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      paddingLeft:10,
      paddingRight:10,
      
    },
    containerback: {
      flex: 1,
      marginTop:20,
      paddingLeft:10,
      paddingRight:10,
      backgroundColor:'white',
      marginTop:-5,
      
    },
    containerOnly: {
      paddingLeft:10,
      paddingRight:10,
      
    },
  root:{
     backgroundColor:'white',
     width:'auto',
     marginTop:15,
     shadowOffset: {width: 1, height: 4},  
     shadowColor: '#171717',  
     shadowOpacity: 0.3,  
     shadowRadius: 3,
     elevation: 3,
     height:'auto',
  },

    conscrol:{
      paddingLeft:10,
    },
    two:{
      backgroundColor:'white',
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,
      elevation: 3,
      borderRadius:5,

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
        fontWeight:'bold',
        padding:5
      },
      titleText3: {
        padding:5
      },
      profilStyle:{
        width:'100%',
        height:250,
        borderRadius:14,

      },

      profilStylelist:{
        width:'100%',
        height:140,
        borderRadius:5,
        marginTop:10,
      },
      info:{
        display:'flex',
        flexDirection:'column',
        float:'left',

      },
      infoItems:{
        width:'100%',
         flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

      },
      add: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        position: 'absolute',                                          
        right: 20,
        bottom: 20,
        zIndex:1,
        backgroundColor: '#003366',
    },
  });