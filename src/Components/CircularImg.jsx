import React from 'react'
import { View, Image } from 'react-native'

export default function CircularImg({imgUrl='https://www.nigiloc.com/images/image-not-found.png', size, border=true}){

    let borderStyle = {}

    if (border) {
        borderStyle = {        
            borderColor: '#FF881D', 
            borderWidth:2}}

    const viewStyles = {
        width:size, 
        height:size, 
        borderRadius:size, 
        overflow:'hidden', 
        ...borderStyle
    }

    return(

        <View style={viewStyles}>
            <Image source={{uri:imgUrl}} 
                style={{flex:1, width:null, height:null, resizeMode:'cover'}}
            />
        </View>

    )
}