import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import {  useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect, useState } from "react";
import { client } from "../sanity";
import {XCircleIcon} from "react-native-heroicons/outline"
const ObjectivesScreen = () => {
  const navigation = useNavigation()
  const [currentRelation, setCurrentRelation] = useState([])


  //To-Do slicer
  const relationship = null
  
  //Route
  const {params:{
    title,
  }} = useRoute();

  // useLayoutEffect(() =>{
  //   navigation.setOptions({ 
  //      headerShown : false,
  //   });
  //   }, []);

  useEffect(()=> {
    const params = {searchTitle: 'Stage 1'};
    
    client.fetch(`*[_type == "relationshipStage" && title == $searchTitle]{
      title,
        objective[] -> 
        {...,} 
      }`
    , params).then((relation) => {
        relation?.map(relation=> (
            console.log('Fetching name of current relationstage '+ relation.title),
            //setCurrentObjective(relation.objective),
            setCurrentRelation(relation)
        ))    
    });  
    
    console.log('Objectives are '+ currentRelation.title);
    // currentObjective?.map(currentObjective => {
    //   console.log('Objectives are '+ currentObjective.objective.name)
    // });

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
      <TouchableOpacity className="items-center "
            onPress={()=> navigation.navigate("Home",{}) } >
        <XCircleIcon size ={40} color={"white"}  />
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default ObjectivesScreen