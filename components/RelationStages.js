import { View, Text, ScrollView } from 'react-native'
import {useEffect,useState,React} from 'react'
import RelationCard from './RelationCard'

import { client } from "../sanity";
import {urlFor} from "../sanity";
import { useDispatch, useSelector } from 'react-redux';
import { selectRelationship, addToRelationship } from '../features/relationshipSlice';

const RelationStages = () => {
  const [relationStages, setRelationStages] = useState([]);

  /**
   * ToDo : Change below query to get the actual relation from player. 
   */
  useEffect(()=> {
    client.fetch(`
    *[_type == "relationshipStage" ] | order(_createdAt asc){
        ...,
        }`).then(data => {
            setRelationStages(data)
        })
    },[] );
    
   //console.log(relationStages)


  return (

  <View className='mx-5 my-5'>

    <View className='flex-row flex-wrap px-5 space-x-2 items-center '>
    {relationStages?.map(relationStage=>(
       <RelationCard 
      imgUrl={urlFor(relationStage?.image).url()}
      title = {relationStage?.title}
      isCurrentRelation = {true}
      key={relationStage?._id}
      />
    
      ) )}
      </View>
    </View>

  )
}

export default RelationStages