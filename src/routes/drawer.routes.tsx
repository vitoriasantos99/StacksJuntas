import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen 
                name="home"
                component={TabRoutes}
                options={{drawerLabel: 'Inicio'}}/>
        </Drawer.Navigator>
    )
}