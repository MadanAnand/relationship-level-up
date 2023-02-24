import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import RelationStages from "../components/RelationStages";
import sanityClient from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [realtionshipStages, setRealtionshipStages] = useState([])

 useLayoutEffect(() =>{
 navigation.setOptions({ 
    headerShown : false,
 });
 }, []);

 useEffect(()=> {
    sanityClient.fetch(`
    *[_type == "player" && name match "Sultan"]{
        name,
          image,
          relationship[]->{
            ...,
            
          }
      }`).then (data =>{
        setRealtionshipStages(data)
      });
 },[] );

 console.log(realtionshipStages);

return (
    <SafeAreaView className='bg-green-50'>
        {/**Header */}
        <View className='flex-row pb-5 mx-2 px-4 space-x-3 items-center'>
        <Image source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-8 w-8 p-x-2 rounded-full'>
        </Image>
        <View className='flex-row'>
            <Text className='text-xl'>Hey Dora!</Text>
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