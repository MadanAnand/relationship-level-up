import { View, Text , ScrollView} from 'react-native'
import{React,useEffect, useState } from "react";
import ObjectiveCard from './ObjectiveCard'
import { client } from "../sanity";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonActions } from '@react-navigation/native';

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
                  setStageObjective(relation?.objective)
              ))    
          });  
      
          },[] );

          client
          .patch('bb9ce9e3-7e8b-4ecb-8c7d-538ea6e4c54d')
          .set({title: 'Stagee'})
          .commit()
          .then((patched) => {
            console.log('Hurray, the document is updated! New document:')
            console.log(patched)
          }).catch((err) => {
            console.error('Oh no, the update failed: ', err.message)
          });
          //console.log(stageObjective)
        //   stageObjective?.map(objective=>{
        //     console.log(objective.name);
        //   });
  return (
    <SafeAreaView>
    <View style={{height: 400}} >
    <ScrollView>
    <View className="py-1 w-full" >
     <View className="mx-5 py-2 bg-[#00CCBB]">
      
      <Text className="text-white text-lg text-center font-extrabold">
        {/* ToDo : add the count */}
         To be Completed
     </Text>
     <View>
        {       
           stageObjective?.map(obj=>(
            <ObjectiveCard
            name = {obj?.name}
            currentValue = {obj?.currentValue}
            expectedValue = {obj?.expectedValue}
            frequency = {obj?.frequency}
            key={obj?._id}
            />
          ))
          }
     </View>
     </View>
    </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default ObjectiveCards