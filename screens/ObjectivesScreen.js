import { View, Text, SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native'
import {  useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from "react";
import HowFarButton from "../components/HowFarButton"
import {XCircleIcon} from "react-native-heroicons/outline";
import ObjectiveCards from '../components/ObjectiveCards';

const ObjectivesScreen = () => {
  const navigation = useNavigation()

  //To-Do slicer
  const relationship = null
  
  //Route
  const {params:{
    title,
  }} = useRoute();

  // useLayoutEffect(() =>{
  //   navigation.setOptions({ 
  //      headerShown : false,
  //   });
  //   }, []);
  
  return (
    
   <ImageBackground source={require('../images/leafyBackground.png')} style={{width: '100%', height: '100%'}}>
     <SafeAreaView className='opacity: 0'>

      <View className="py-10">
      <Text className="text-xl text-white py-5 font-bold text-center">
        Objectives for reaching level
      </Text>
      <Text className="text-xl text-white font-bold text-center">
       {title}
      </Text>
      <View>
        <ObjectiveCards
        title={title}/>
      </View>
      </View>


      <View style={{position: 'absolute', left: 0, right: 0, bottom: 5, justifyContent: 'center', alignItems: 'center'}} >
      <TouchableOpacity 
            onPress={()=> navigation.navigate("Home",{}) } >
        {/* <XCircleIcon size ={40} color={"white"}   /> */}
      </TouchableOpacity>
      </View>
      

      <View  >
      <TouchableOpacity 
            onPress={()=> navigation.navigate("Home",{}) } >
       
        <HowFarButton/>
      </TouchableOpacity>
      </View>
    
      </SafeAreaView>
      </ImageBackground>
  )
}

export default ObjectivesScreen