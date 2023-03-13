import { View, Text} from 'react-native'
import React from 'react'

const HeaderBanner = ({title}) => {
  return (
    <View className="py-5 w-full" >
        <View className="mx-5 py-5 bg-[#00CCBB]">
      
      <Text className="text-white text-lg text-center font-extrabold">
        You are in Level  
        {"\n"} {title}
     </Text>
     </View>

    </View>
  )
}

export default HeaderBanner