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
    <View>
   <ImageBackground source={require('../images/leafyBackground.png')} style={{width: '100%', height: '100%'}}>
      <Text className="text-xl text-white font-bold text-center">
        Objectives for reaching level
      </Text>
      <Text className="text-xl text-white font-bold text-center">
       {title}
      </Text>
      <View>
        <ObjectiveCards
        title={title}/>
      </View>
      <TouchableOpacity className="items-center "
            onPress={()=> navigation.navigate("Home",{}) } >
        <XCircleIcon size ={40} color={"white"}  />
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default ObjectivesScreen