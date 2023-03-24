import { View, Text } from 'react-native'
import{React,useEffect, useState } from "react";
import ObjectiveCard from './ObjectiveCard'
import { client } from "../sanity";

const ObjectiveCards = ({title}) => {

    const [stageObjective, setStageObjective] = useState([])

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
        //   stageObjective?.map(objective=>{
        //     console.log(objective.name);
        //   });
  return (
    <View className="py-5 w-full" >
     <View className="mx-5 py-5 bg-[#00CCBB]">
      
      <Text className="text-white text-lg text-center font-extrabold">
         05 / 10 Completed
     </Text>
     <View>
        {       
           stageObjective?.map(objective=>{
            console.log(objective._id);
            <ObjectiveCard />
          })}

        {/* {  stageObjective?.map(obj=>{
            //console.log(objective._id);
                    <ObjectiveCard
                    name = {obj.name}
                    currentValue = {obj.currentValue}
                    expectedValue = {obj.expectedValue}
                    frequency = {obj.frequency}
                    key={obj._id}
                    />
          })
        } */}
     </View>
     </View>
    </View>
  )
}

export default ObjectiveCards