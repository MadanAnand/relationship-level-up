import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RelationCard from './RelationCard'
import { SafeAreaView } from 'react-native-safe-area-context'

const RelationStages = () => {
  return (
    /** working Scroll View */
    // <ScrollView 
    // contentContainerStyle={{
    //   paddingHorizontal:15,
    //   paddingTop: 10, 
    // }}
    //  showsHorizontalScrollIndicator="{false}">
    //   <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 1"/>
    //   <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 2"/>
    //   <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 3"/>
    //   <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 1"/>
    //   <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 2"/>
    //   <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 3"/>
    // </ScrollView>
  <View className='my-10 '>
    <View className='flex-row pb-2 mx-2 px-4 space-x-2 items-center'>
      <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 1"/>
      <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 2"/>
      <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 3"/>
    </View>
    <View className='flex-row pb-2 mx-2 px-4 space-x-2 items-center'>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 4"/>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 5"/>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 6"/>
      </View>
      <View className='flex-row pb-2 mx-2 px-4 space-x-2 items-center'>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 7"/>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 8"/>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 9"/>
      </View>
    </View>
  )
}

export default RelationStages