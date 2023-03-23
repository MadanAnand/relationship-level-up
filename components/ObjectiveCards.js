import { View, Text } from 'react-native'
import React from 'react'
import ObjectiveCard from './ObjectiveCard'

const ObjectiveCards = () => {
  return (
    <View className="py-5 w-full" >
     <View className="mx-5 py-5 bg-[#00CCBB]">
      
      <Text className="text-white text-lg text-center font-extrabold">
         05 / 10 Completed
     </Text>
     <View>
        <ObjectiveCard
        name="Go Hiking"
        currentValue = "2"
        expectedValue = "2"
        frequency = "Week"
        />
     </View>
     </View>
    </View>
  )
}

export default ObjectiveCards