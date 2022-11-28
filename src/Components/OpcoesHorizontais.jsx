import React from 'react'
import { View, Text } from 'react-native'
import HorizontalScroll from './HorizontalScroll'
import { POText } from './POText'

export default function OpcoesHorizontais({opcoes, titleScroll}){

    const selecoes = opcoes.map((opcaoAtual)=>{

        const reactView = <View style={{paddingHorizontal:10, paddingVertical:10, borderRadius:30, marginTop:2}}>
                            <POText size={16}>{opcaoAtual}</POText>
                          </View>
        
        return reactView
    });

    return(
        <View style={{marginVertical:5}}>
            <HorizontalScroll scrollTitle={titleScroll} scrollTitleBottomSpace={2}>
                <View style={{borderWidth:2, borderColor:'#FF881D', flexDirection:'row', borderRadius:30, marginHorizontal:20, overflow:'hidden'}}>
                    {selecoes}
                </View>
            </HorizontalScroll>            
        </View>

    )
}