import React from 'react'
import {Text, View, Image} from 'react-native'
import { useFonts } from 'expo-font'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
        width:80, 
        height:80, 
        borderRadius:100, 
        overflow:'hidden', 
        borderColor:'#FF881D', 
        borderWidth:2, 
        marginRight:10
    }

    return(

        <View style={{alignItems:'center'}}>
                <View style={viewStyles}>
                    <Image source={{uri:SaaS}} 
                        style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                    />
                </View>
            <Text style={{fontSize:16, color:'black', marginRight:10, fontFamily:'PoppinsRegular'}}>{texto}</Text>
        </View>

    )
}