import React from 'react'
import { View, Text } from 'react-native'
import { POText } from './POText'
import { MaterialIcons } from '@expo/vector-icons';

export default function Avaliacoes({autor, descricao, avaliacao}){

    let stars = []
    for (let index = 0; index < avaliacao; index++) {
        stars.push(<MaterialIcons name="star-rate" size={17} color="#FF881D" key={index}/>) 
        
    }

    return(
        <View style={{backgroundColor:'white', width:'100%', borderBottomLeftRadius:10, borderBottomRightRadius:10, shadowColor:"black", elevation: 5, alignItems:'center', padding:10, justifyContent:'space-between', marginBottom:20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                <POText size={16} weight={'Bold'}>{autor}</POText>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#FF881D', fontSize:13, fontFamily:'PoppinsRegular', marginTop:1, marginRight:4}}>{avaliacao}</Text>
                    {stars}
                </View>   
            </View>
            <View style={{justifyContent:'flex-start'}}>
                <POText size={14}>{descricao}</POText>   
            </View>
                          
        </View>
    )
}