import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RelationCard = ({imgUrl, title, isCurrentRelation}) => {
  const navigation = useNavigation();
 
  return (
    <TouchableOpacity 
    className={"relative mr-5 px-2 shadow "  +
    (isCurrentRelation ? 'bg-[#a3cc99]' : 'bg-[#cc3600]')}
    onPress={()=> navigation.navigate("ObjectivesScreen",{title})}>
      <View >
        <Image source={{
            uri:imgUrl
        }}
        className='top-1 h-20 w-20'>
        </Image>
        <Text className='relative bottom-0 left-2 text-white text-lg font-bold'> 
        {title}
        </Text>
        </View>
    </TouchableOpacity>
  )
}

export default RelationCard