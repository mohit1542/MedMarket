import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Notification from './screens/Notification';
import { Image, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();


const App = ()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerTitle : ()=> <Image style={{height:20, width:30, tintColor:'#3a643b'}} source={require('./assets/icons/menu.png')}/>,
          headerStyle: {backgroundColor:'#ffff'}, 
          headerRight : ()=>
          <View style={{flexDirection:'row', columnGap:20}}>
              <Ionicons name="notifications-outline" size={24} color="black"  />
              <Feather name="search" size={24} color="grey"/>
              <Image style={{height:25, width:28, tintColor:'grey'}} source={require('./assets/icons/shopping-basket.png')}/>
              <Feather name="user" size={24} color="black" />
          </View>
          
          
        }}
        />

        <Stack.Screen
        name= 'Notification'
        component={Notification}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App