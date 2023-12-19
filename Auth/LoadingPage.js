import React ,{Component,useLayoutEffect,useState} from 'react'
import { StyleSheet,Image, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  TextInput, IconButton } from "@react-native-material/core";
import {MaterialIcons} from '@expo/vector-icons';


const Login =({navigation})=>{

    
  


  const  load = async ()=>{ 
      try {
        const email= await AsyncStorage.getItem('email')
        const password= await AsyncStorage.getItem('password');
        const username= await AsyncStorage.getItem('username');

        console.log(email);
        console.log(password);
        console.log(username);
        if (email !==null && password!==null) {
            if (password=="heaven" && email=="heaven@gmail.com") {
                navigation.navigate('Welcom');
            } else {
               navigation.navigate('Welcom');
            }
         }else{
            navigation.navigate('Welcom');
         }
      } catch (error) {
         alert(error);
      }
      
    };
  
    useLayoutEffect(()=>{
      load();
    },[]);
  

  return (
    <ScrollView style={styles.container}>
       <View style={{ alignItems: 'center',justifyContent: 'center',marginTop:'65%'}}>
           <Image style={{with:220,height:220}}
              source={require('./loadingImage.gif')}
              resizeMode="contain"
             />    
         </View>
 
  </ScrollView>
  )
}





  
export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingLeft:20,
    paddingRight:20,
  },
  profilStyle:{
    margin:'auto'
  },
  containInput:{
    width:'100%',
    margin:'auto',
    justifyContent:'center'
  },
  inpute: {
    border:'1px solid #003366',
    margin:'auto',
    height:40,
    borderRadius:15,
    width:'95%',
    marginTop:30,
    paddingLeft:8,
    
  },
  loginbtt:{
    backgroundColor:'#003366',
    width:'60%',
    height:50,
    borderRadius:20,
    margin:'auto',
    marginTop:20,
  },
  txtLogin:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
    fontSize:20
  },
  register:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
     width:'60%',
     alignItems:'center',
     margin:'auto',
   marginTop:10
  },
  txtRegister:{
    fontWeight:'bold',
    color:'#003366'
 },
  txtRddegister:{
    width:'45%',
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
    elevation: 3,
  },
  bttncancel:{
    width:'45%',
    color:'#003366red',
    border:'1px solid #003366',
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
    elevation: 3,
  }

  });