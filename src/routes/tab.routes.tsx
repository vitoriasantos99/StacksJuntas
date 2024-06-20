import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import Feed from "../views/Inicio";
import Messages from "../views/Home";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <SafeAreaView style={{flex:1}}>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                />   
                <Tab.Screen
                    name="Messages"
                    component={Messages}
                />     
            </Tab.Navigator>
        </SafeAreaView>
    )
}