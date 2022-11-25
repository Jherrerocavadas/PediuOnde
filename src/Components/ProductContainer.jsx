import React from 'react'
import { Text, View, Image } from 'react-native'

export default function ProductContainer({imageUrl, Title, Description}){

    const containerStyle = {
        width:230, 
        height:185, 
        borderColor:'#FF881D', 
        borderWidth:1.5, 
        borderRadius:10, 
        overflow:'hidden',
        marginRight:15
    }

    const containerImg = {
        width:'100%', 
        height:115
    }

    const textContainer = {
        width:'100%', 
        height:70, 
        backgroundColor:'#FF881D', 
        paddingHorizontal:5,
        paddingTop:5
    }

    return(
        <>
        <View style={containerStyle}>
            <View style={containerImg}>
                <Image source={{uri:imageUrl}} 
                style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
            </View>

            <View style={textContainer}>
                <Text style={{color:'white', fontSize:15, fontFamily:'PoppinsBold', marginBottom:-4}}>{Title}</Text>
                <Text style={{color:'white', fontSize:13, fontFamily:'PoppinsRegular'}}>{Description}</Text>
            </View>
        </View>
        </>
    )
}