import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {XCircleIcon} from "react-native-heroicons/outline";
const HowFarButton = () => {
    const navigation = useNavigation();
  return (
    <View className=" py-2 w-full z-50">
        <View className="mx-5 py-10 bg-[#00CCBB]" >
        {/* <TouchableOpacity className="mx-5 py-10 bg-[#00CCBB]"
                          onPress={()=> navigation.navigate("ObjectivesScreen",{}) }></TouchableOpacity>
         */}
      {/* <Text className="text-white text-lg text-center font-extrabold">
        How Far Is My Next Level?
     </Text> */}
     <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
       <XCircleIcon size ={40} color={"white"}   />
       <XCircleIcon size ={40} color={"white"}   />
     </View>

      </View>
    </View>
  )
}

export default HowFarButton