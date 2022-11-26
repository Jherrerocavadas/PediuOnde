import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View, Image } from 'react-native'

const styleEncomenda = StyleSheet.create({
    width:85,
    height:25,
    borderBottomRightRadius:10,
    position:'absolute',
    zIndex:1,
    backgroundColor:'#FF881D',
    justifyContent:'center',
    alignItens:'center',
    paddingLeft:5,
    paddingTop:2,
    borderWidth:1,
    borderColor:'#FF881D'
})

export function ProductContainer({imageUrl, Title, Description='', Encomenda=false}){

    if (Description.length > 40) Description = Description.slice(0, 40) + '...'

    const containerStyle = {
        width:205, 
        height:185, 
        borderColor:'#FF881D', 
        borderWidth:1.5, 
        borderRadius:10, 
        overflow:'hidden',
        marginLeft:20
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
        paddingTop:5,
    }

    return(
        <>
        <View style={containerStyle}>
            <View style={containerImg}>
                {Encomenda ?                 
                <View style={styleEncomenda}>
                    <Text style={{fontSize:12, color:'white', fontFamily:'PoppinsBold'}}>Encomenda</Text>
                </View> : <></>}

                <Image source={{uri:imageUrl}} 
                style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
            </View>

            <View style={textContainer}>
                <Text style={{color:'white', fontSize:14, fontFamily:'PoppinsBold', marginBottom:-4}}>{Title}</Text>
                <Text style={{color:'white', fontSize:12, fontFamily:'PoppinsRegular'}}>{Description}</Text>
            </View>
        </View>
        </>
    )
}

export function ProductContainerDetailed({imageUrl, Title, Description='', Encomenda=false}){
    
    if (Description.length > 100) Description = Description.slice(0, 100) + '...'

    return(
        <View style={{width:'100%', height:110, borderWidth:2, borderColor:'#FF881D', borderRadius:10, overflow:'hidden', flexDirection:'row'}}>
            <View style={{height:'100%', aspectRatio:4/3}}>
            {Encomenda ?                 
                <View style={styleEncomenda}>
                    <Text style={{fontSize:12, color:'white', fontFamily:'PoppinsBold'}}>Encomenda</Text>
                </View> : <></>}
                <Image source={{uri:imageUrl}} 
                style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
            </View>
            <View style={{width:'60%',height:'100%', paddingVertical:5, paddingHorizontal:10}}>
                <Text style={{color:'black', fontSize:15, fontFamily:'PoppinsBold', }}>{Title}</Text>
                <Text style={{color:'black', fontSize:12, fontFamily:'PoppinsRegular'}}>{Description}</Text>
            </View>
        </View>
    )

}