
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator>
        {/**screens */  }
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

