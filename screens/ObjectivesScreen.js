import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import {  useNavigation, useRoute } from '@react-navigation/native';
import{React,useEffect, useState } from "react";

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

  return (
    
   <ImageBackground source={require('../images/leafyBackground.png')} style={{width: '100%', height: '100%'}}>
     <View>
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

      <View style={{position: 'absolute', left: 0, right: 0, bottom: 20, justifyContent: 'center', alignItems: 'center'}} >
      <TouchableOpacity 
      //className="absolute bottom-10 "
            onPress={()=> navigation.navigate("Home",{}) } >
        <XCircleIcon size ={40} color={"white"}   />
      </TouchableOpacity>
      </View>

      {/* <View style={{position: 'absolute', left: 0, right: 0, bottom: 20, justifyContent: 'center', alignItems: 'center'}} >
      <TouchableOpacity 
      //className="absolute bottom-10 "
            onPress={()=> navigation.navigate("Home",{}) } >
        <XCircleIcon size ={40} color={"white"}   />
      </TouchableOpacity>
      </View> */}
      
      </View>
      </ImageBackground>
  )
}

export default ObjectivesScreen