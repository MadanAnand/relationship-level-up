import { View, Text } from 'react-native'
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
      <View>
      <Text className="text-lg fong-bold text-center">
        Objectives for reaching level
      </Text>
      <Text className="text-lg fong-bold text-center">
       {title}
      </Text>
      </View>
    </View>
  )
}

export default ObjectivesScreen