import { View, Text,ImageBackground,TouchableOpacity } from 'react-native'
import {  useNavigation, useRoute } from '@react-navigation/native';
import{React,useEffect, useState } from "react";
import { client } from "../sanity";
import {XCircleIcon} from "react-native-heroicons/outline"
const ObjectivesScreen = () => {
  const navigation = useNavigation()
  const [stageObjective, setStageObjective] = useState([])

  //To-Do slicer
  const relationship = null
  
  //Route
  const {params:{
    title,
  }} = useRoute();


  useEffect(()=> {
  const params = {searchTitle: title};
    client.fetch(`*[_type == "relationshipStage" && title == $searchTitle]{
        objective[] -> 
        {...,} 
      }`
    , params).then((relation) => {
        relation?.map(relation=> (
            setStageObjective(relation.objective)
        ))    
    });  

    },[] );
    //console.log(stageObjective);
    stageObjective?.map(objective=>{
      console.log(objective.name);
    })
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