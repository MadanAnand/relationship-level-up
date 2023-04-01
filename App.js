
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import ObjectivesScreen from './screens/ObjectivesScreen';
import store from './store'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
     
      <TailwindProvider>
      {/* <Stack.Navigator>
       
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ObjectivesScreen" component={ObjectivesScreen}
                      options={{presentation : "modal", headerShown:"false"}}  />
      </Stack.Navigator> */}


      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ObjectivesScreen" component={ObjectivesScreen} 
            options={{headerShown:"false"}}/>
      </Tab.Navigator>
    

      </TailwindProvider>
  
    </NavigationContainer>
  );
}

