import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ObjectivesScreen = () => {
  const navigatation = useNavigation()
  //To-Do slicer
  const relationship = null

  return (
    <View>
      <View>
      <Text className="text-lg fong-bold text-center">
        Objectives for reaching level
      </Text>
      <Text className="text-lg fong-bold text-center">
       {/* To-Do slicer
       {relationStage.title} */}
      </Text>
      </View>
    </View>
  )
}

export default ObjectivesScreen