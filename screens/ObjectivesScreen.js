import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ObjectivesScreen = () => {
  const navigatation = useNavigation()
  //To-Do slicer
  const relationship = null
  
  //Route
  const {params:{
    title,
  }} =useRoute();

  return (
    <View>
   <ImageBackground source={require('../images/leafyBackground.png')} style={{width: '100%', height: '100%'}}>
      <Text className="text-xl text-white fong-bold text-center">
        Objectives for reaching level
      </Text>
      <Text className="text-xl text-white fong-bold text-center">
       {title}
      </Text>
      </ImageBackground>
    </View>
  )
}

export default ObjectivesScreen