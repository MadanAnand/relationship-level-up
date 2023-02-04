import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {

const navigation = useNavigation();
useLayoutEffect(()=>{
navigation.setOptions({
    headerShown : false,
});
})
return (
    <SafeAreaView>
        {/* <Text className='text-green-500'> Testing is such a pain! </Text> */}
        <View className='flex-row pb-5 space-x-5 items-center'>
        <Image source={{
            uri:'https://links.papareact.com/wru'
        }}
        className='h-10 w-10 p-4 rounded-full'>
            
        </Image>
        <View>
            <Text className='text-xl'>Hey Zsolt!</Text>
        </View>
        </View>
    </SafeAreaView>
);
}

export default HomeScreen;