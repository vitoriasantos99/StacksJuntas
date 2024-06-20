import React from "react";
import { View, Text, Image, Pressable, StyleSheet, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Messages from "./Home";

export default props =>{
    return(
        <View style={{flex: 1}}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >
        <Text>GF Gráfica</Text>

        <Pressable onPress={()=> props.navigation.navigate('Messages')}>
            <Text>Entrar</Text>
            <Icon name="arrow-forward-circle-sharp" size={25} color="#FFF"/>
        </Pressable>




            </ImageBackground>
        </View>
    )
}