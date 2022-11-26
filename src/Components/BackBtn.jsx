import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function BackBtn(){

    return(
        <View style={{width:35, height:35, borderRadius:40, backgroundColor:'white', shadowColor:'black', position:'absolute', zIndex:1, marginVertical:45, marginHorizontal:15, justifyContent:'center', alignItems:'center', paddingLeft:8}}>
            <MaterialIcons name='arrow-back-ios' size={25} color={'#FF881D'}/>
        </View>

    )
}