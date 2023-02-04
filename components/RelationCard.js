import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RelationCard = (imgUrl, title) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-10 w-10 p-x-2'>
        </Image>
        <Text> test Images</Text>
    </TouchableOpacity>
  )
}

export default RelationCard