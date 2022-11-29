import React from 'react'
import { View, Text } from 'react-native'
import CircularImg from './CircularImg'
import { POButton } from './POButton'
import { POText } from './POText'

export default function ItenSacola({
    nomeProduto, 
    descricaoPedido, 
    imgUrl='https://www.nigiloc.com/images/image-not-found.png'}){
    
       return(
        <View style={{flexDirection:'row', maxHeight:110, width:'100%', backgroundColor:'#E6E6E6', borderRadius:10, justifyContent:'space-between', padding:10, alignItems:'center'}}>
            
            <View style={{flexDirection:'row'}}>
                <View style={{marginTop:5, marginRight:15}}>
                    <CircularImg size={40} border={false} imgUrl={imgUrl}/>
                </View>

                <View>
                    <POText weight='Bold' size={16}>{nomeProduto}</POText>
                    <POText weight='Regular' size={14}>{descricaoPedido}</POText>
                </View>                
            </View>


            <POButton styleBtn={'orange'} shadow={false} text={'Modificar'} BtnWidth={100} BtnHeight={35} fontSize={14} />

        </View>
       )
}