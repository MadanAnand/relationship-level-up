import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import {  useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from "react";
import { client } from "../sanity";

const ObjectivesScreen = () => {
  const navigatation = useNavigation()
  const [currentRelation, setCurrentRelation] = useState([])

  //To-Do slicer
  const relationship = null
  
  //Route
  const {params:{
    title,
  }} =useRoute();

  useEffect(()=> {
    const params = {searchName: 'Stage 1'};
    
    client.fetch(`*[_type == "relationshipStage" && title == $searchName]{
      title,
        objective[] -> 
        {...,} 
      }`
    , params).then((relation) => {
        relation?.map(relation=> (
            console.log('Fetching name of current relationstage '+ relation.title),
            //player?.relationship?.map(relation => console.log(relation.title)),
      
            setCurrentRelation(relation.objective)
        ))    
    });  
    

    currentRelation?.map(objective => {
      console.log('`Objectives are ` '+ objective)
    });
    },[] );
    
  return (
    <View>
   <ImageBackground source={require('../images/leafyBackground.png')} style={{width: '100%', height: '100%'}}>
      <Text className="text-xl text-white fong-bold text-center">
        Objectives for reaching level
      </Text>
      <Text className="text-xl text-white fong-bold text-center">
       {title}
      </Text>
      </ImageBackground>
    </View>
  )
}

export default ObjectivesScreen