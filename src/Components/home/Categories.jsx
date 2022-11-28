import React from 'react'
import {Text, View, Image} from 'react-native'
import { useFonts } from 'expo-font'

export default function Categories({SaaS, texto}){

    const [fontsLoaded] = useFonts({
        PoppinsLight: require('../../../assets/fonts/Poppins-Light.ttf'),
        PoppinsRegular: require('../../../assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsBold: require('../../../assets/fonts/Poppins-Medium.ttf'),
        PoppinsBlack: require('../../../assets/fonts/Poppins-Bold.ttf'),

    })

    const viewStyles = {
        backgroundColor:'#d1d1d1', 
        width:70, 
        height:70, 
        borderRadius:100, 
        overflow:'hidden', 
        borderColor:'#FF881D', 
        borderWidth:2, 
        marginLeft:10
    }

    return(

        <View style={{width:100, alignItems:'center'}}>
                <View style={{...viewStyles}}>
                    <Image source={{uri:SaaS}} 
                        style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                    />
                </View>
            <Text style={{fontSize:16, color:'black',marginLeft:10, fontFamily:'PoppinsRegular'}}>{texto}</Text>
        </View>

    )
}