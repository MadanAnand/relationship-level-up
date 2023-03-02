import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HowFarButton = () => {
  return (
    <View className="absolute bottom py-10 w-full z-50">
        <TouchableOpacity className="mx-5 py-10 bg-[#00CCBB]">

        
      <Text className="text-white text-lg text-center font-extrabold">
        How Far Is My Next Level?
     </Text>

      </TouchableOpacity>
    </View>
  )
}

export default HowFarButton