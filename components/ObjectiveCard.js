import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Slider from '@react-native-community/slider';

const ObjectiveCard = ({name,currentValue,expectedValue,frequency}) => {
  return (
    <View className="py-4">
        <View style={{flexDirection:'row',  justifyContent:'space-between'}} >
        <View className ="px-5">
        <Text className="text-white text-lg" > {name}</Text>
        </View>        
        <View className ="px-5">
        <Text className="text-white text-lg" >{currentValue} / {expectedValue}</Text>
        </View>
        </View>
        <View className="px-11 mx-auto flex-row">
        {/* <Progress.Bar progress={0.3} width={250} height={15}  borderColor={"white"} borderRadius={1} borderWidth={2} color={"white"}/> */}
        <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={expectedValue}
        value={currentValue}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        />
        </View>
    </View>
  )
}

export default ObjectiveCard