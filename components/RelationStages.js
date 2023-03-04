import { View, Text, ScrollView } from 'react-native'
import {useEffect,useState,React} from 'react'
import RelationCard from './RelationCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { client } from "../sanity";
import {urlFor} from "../sanity";

const RelationStages = () => {
  const [relationStages, setRelationStages] = useState([])
  /**
   * ToDo : Change below query to get the 
   */
  useEffect(()=> {
    client.fetch(`
    *[_type == "relationshipStage" ] | order(_createdAt asc){
        ...,
        }`).then(data => {
            setRelationStages(data)
        })
    },[] );
    
    console.log(relationStages)


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
  <View className='mx-5 my-5'>

    <View className='flex-row flex-wrap px-4 space-x-2 items-center '>
    {relationStages?.map(relationStage=>(
       <RelationCard 
      imgUrl={urlFor(relationStage?.image).url()}
      title = {relationStage?.title}
      key={relationStage._id}
      />
    
      ) )}
      </View>

      {/* Working hard coded views
       <View className='flex-row pb-2 mx-2 px-4 space-x-2 items-center'>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 7"/>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 8"/>
        <RelationCard imgUrl="https://links.papareact.com/wru" title="Stage 9"/>
      </View> */}
    </View>
  )
}

export default RelationStages