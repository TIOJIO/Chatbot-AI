import React, {useState,useEffect} from 'react';
import {View, Text, Image, TouchableOpacity ,ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


const images = [
  require('../assets/un.png'),
  require('../assets/deux.png'),
  require('../assets/trois.png'),
];


const App = ({navigation}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePreview = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  useEffect(() => {
     console.log(currentImage);
  }, []);
  console.log(currentImage);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <ImageBackground
                  source={images[currentImage]}
                  resizeMode='cover'
                  style={{flex: 1,width: '100%',justifyContent:'flex-end', alignItems: 'center',margin:'auto'}}
      >

      <View style={{flexDirection: 'row',width:'100%',justifyContent:'space-between',marginTop:-100}}>
        <Text>.</Text>

       {
          currentImage==2?
          <View style={{ width:300, borderRadius:15, marginBottom:30,}}>
          <TouchableOpacity style={{borderRadius:20, margin:'auto', backgroundColor: '#003366',flexDirection: 'row',alignItems:'center',justifyContent:'center'}} onPress={() =>navigation.push('Home')} >
              <Text style={{fontSize:20,fontWeight:'bold', color: 'white',alignItems:'flex-end', borderRadius:15}}> Getting Started </Text>
              <MaterialIcons  name='keyboard-arrow-right' color='white' size={50} />
          </TouchableOpacity>
        </View> :
       <View style={{ width:200, borderRadius:15, marginBottom:30,}}>
            <TouchableOpacity style={{borderRadius:20, margin:'auto', backgroundColor: '#003366',flexDirection: 'row',alignItems:'center',justifyContent:'center'}} onPress={handleNext} >
                <Text style={{fontSize:20,fontWeight:'bold', color: 'white',alignItems:'flex-end', borderRadius:15}}> Next </Text>
                <MaterialIcons  name='keyboard-arrow-right' color='white' size={50} />
            </TouchableOpacity>
          </View>

       }
        


      </View>

      <Text style={{color:'white'}}>kjkhgfd</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

