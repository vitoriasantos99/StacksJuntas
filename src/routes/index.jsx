import React from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";

import DrawerRoutes from './drawer.routes'

export default function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}