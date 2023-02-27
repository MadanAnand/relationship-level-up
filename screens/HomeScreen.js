import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import RelationStages from "../components/RelationStages";
import { client } from "../sanity";
import {urlFor} from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [realtionshipStages, setRealtionshipStages] = useState([])

 useLayoutEffect(() =>{
 navigation.setOptions({ 
    headerShown : false,
 });
 }, []);

 const query = '*[_type == "relationshipStage"]'
 const params = {}
 
 client.fetch(query, params).then((relationshipStages) => {
   console.log('relationships stages are')
   relationshipStages.forEach((relationshipStages) => {
     console.log(`${relationshipStages.title}`)
   })
 }).catch(console.log('no relationship stages found'))

 useEffect(()=> {
    client.fetch(query, params).then(data =>{
        setRealtionshipStages(data)
      });
 },[] );

 console.log(realtionshipStages[0].image);
 console.log(urlFor(realtionshipStages[0].image).url());
//  const relationstage=relationshipStages.first();
//  console.log(relationstage.title)

return (
    <SafeAreaView className='bg-green-50'>
        {/**Header */}
        <View className='flex-row pb-5 mx-2 px-4 space-x-3 items-center'>

        <Image source={{
            uri: urlFor(realtionshipStages[0].image).url()
        }}
        className='h-8 w-8 p-x-2'>
        </Image>

        <Image source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-8 w-8 p-x-2 rounded-full'>
        </Image>
        <View className='flex-row'>
            <Text className='text-xl'> Hey Dora!</Text>
        </View>
        </View>
        
        {/**body */}
  
        <View className='bg-red-100' >
            <RelationStages />
        </View>
    </SafeAreaView>
);
}

export default HomeScreen;