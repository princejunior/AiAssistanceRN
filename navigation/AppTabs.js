import { StyleSheet, Text, View } from 'react-native';

// SCREENS
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ProfileScreen, SettingsScreen } from '../screens';

// ICONS
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left:0,
    elevation:0,
    height:60,
    background: "#fff"
  }
}

export default function AppTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} 
          options= {{
            tabBarIcon: ({focused}) => {
              return (
                <View styles= {{alignItems: "center", justifyContent: "center"}}>
                  <Entypo name="home" size= {24} color={focused ? "#16247d" : "#111"} />
                  {/* <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text> */}
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
          options= {{
            tabBarIcon: ({focused}) => {
              return (
                <View styles= {{alignItems: "center", justifyContent: "center"}}>
                  <MaterialIcons name="person" size= {30} color={focused ? "#16247d" : "#111"} />

                  {/* <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text> */}
                </View>
              )
            }
          }}
        />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} 
          options= {{
            tabBarIcon: ({focused}) => {
              return (
                <View styles= {{alignItems: "center", justifyContent: "center"}}>
                  <Ionicons name="settings-sharp" size= {24} color={focused ? "#16247d" : "#111"} />
                  {/* <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text> */}
                </View>
              )
            }
          }}
        />

        {/* Add more screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
