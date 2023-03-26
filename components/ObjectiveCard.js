import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const ObjectiveCard = ({name,currentValue,expectedValue,frequency}) => {
  return (
    <View className="py-4">
        <View className ="">
        <View className ="items-start px-11">
        <Text className="text-white text-lg" > {name}</Text>
        </View>        
        <View className ="items-end px-11">
        <Text className="text-white text-lg" > {currentValue} / {expectedValue} {frequency}</Text>
        </View>
        </View>
        <View className="items-center">
            <Progress.Bar progress={0.3} width={250} height={10}  borderColor={"white"} borderRadius={1} borderWidth={2} color={"white"}/>
        </View>
    </View>
  )
}

export default ObjectiveCard