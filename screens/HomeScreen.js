import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import RelationStages from "../components/RelationStages";
import { client } from "../sanity";
import {urlFor} from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [relationStages, setRelationStages] = useState([])
 useLayoutEffect(() =>{
 navigation.setOptions({ 
    headerShown : false,
 });
 }, []);

useEffect(()=> {
client.fetch(`
*[_type == "relationshipStage" ]{
    ...,
    }`).then(data => {
        setRelationStages(data)
    })
},[] );


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