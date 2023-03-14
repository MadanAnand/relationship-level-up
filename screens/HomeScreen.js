import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import RelationStages from "../components/RelationStages";
import HowFarButton from "../components/HowFarButton"
import HeaderBanner from "../components/HeaderBanner";
import { client } from "../sanity";
import {urlFor} from "../sanity";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [relationship, setRelationship] = useState([])
    const [player, setPlayer] = useState([])
    const [currentRelation, setCurrentRelation] = useState([])

    // const [isPressed, setIsPressed] = useState(false);
    // const relationStageSlices = useSelector(selectRelationship);
    // const dispatch = useDispatch();
   
    // const addStageToRelationship = () =>{
    //   dispatch(addToRelationship({title, description, startDate,objectiveList}))
    // }
    // console.log(relationStageSlices)

 useLayoutEffect(() =>{
 navigation.setOptions({ 
    headerShown : false,
 });
 }, []);

useEffect(()=> {
const params = {searchName: 'Sultan'}

client.fetch(`*[_type == "player" && name == $searchName]{
    name,
    relationship[] -> {...,}
 }`
, params).then((player) => {
    player?.map(player=> (
        console.log('Fetching name of current player '+ player.name),
        //player?.relationship?.map(relation => console.log(relation.title)),
        setCurrentRelation(player.relationship),
        setPlayer(player)
    ))
    
})

// client.fetch(`
// *[_type == "relationship" && title =="Alladin / Orino Koflo"]{
//     currentRelationshipStage -> {...,}
//     }`).then(data => {
//         setRelationship(data)
//     })
},[] );

//currentRelation.map(relationTitle => console.log(relationTitle.title))
//console.log(currentRelation)
console.log(player)

relationship?.map(relationship=> (
    console.log('Fetching title of current rel '+relationship.currentRelationshipStage.title)
))

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
            <Text className='text-xl'> Hey {player.name}</Text>
        </View>
        </View>
        
        {/**body */}

        <View  >
            <HeaderBanner title={player?.relationship?.map(relation => (relation.title))}
                          level={'level'}/>
        </View>

        <View  >
            <RelationStages />
        </View>

        <View >
            <HowFarButton />
        </View>
    </SafeAreaView>
);
}

export default HomeScreen;