import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RelationCard from './RelationCard'

const RelationStages = () => {
  return (
    <ScrollView >
      <RelationCard imgUrl='https://links.papareact.com/wru' title='testing'/>
      <RelationCard imgUrl='https://links.papareact.com/wru' title='testing'/>
      <RelationCard imgUrl='https://links.papareact.com/wru' title='testing'/>
      <RelationCard imgUrl='https://links.papareact.com/wru' title='testing'/>
    </ScrollView>
  )
}

export default RelationStages