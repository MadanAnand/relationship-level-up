import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RelationCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='relative mr-2 px-2 bg-red-400 shadow'>
      <View >
        <Image source={{
            uri:imgUrl
        }}
        className='top-1 h-20 w-20'>
        </Image>
        <Text className='relative bottom-0 left-4 text-black font-bold'> 
        {title}
        </Text>
        </View>
    </TouchableOpacity>
  )
}

export default RelationCard