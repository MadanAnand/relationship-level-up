
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-url-polyfill/auto';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import ObjectivesScreen from './screens/ObjectivesScreen';
import store from './store'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
      <Stack.Navigator>
        {/**screens */  }
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ObjectivesScreen" component={ObjectivesScreen}
                      options={{presentation : "modal", headerShown:"false"}}  />
      </Stack.Navigator>
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

