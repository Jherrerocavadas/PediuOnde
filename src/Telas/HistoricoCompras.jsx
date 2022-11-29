import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import BackBtn from '../Components/BackBtn'
import { POButton } from '../Components/POButton'
import { POText } from '../Components/POText'
import SafeArea from '../Components/SafeArea'
import { MaterialIcons } from '@expo/vector-icons';
import BoxHistoricoCompras from '../Components/BoxHistoricoPedido'

export default function HistoricoCompras(){

    return(
        <SafeArea>
            <BackBtn/>
            <ScrollView>
                <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
                    <POText weight='Black' size={22}>Minhas Compras</POText>            
                </View>
            
                <BoxHistoricoCompras  
                    numPedido={123123} 
                    fotoPedido={'https://assets.unileversolutions.com/recipes-v2/67405.jpg'}
                    fotoVendedor={'https://joliz.com.br/dicas/wp-content/uploads/2022/02/pexels-brent-keane-1702373-scaled.jpg'}
                    nomeVendedor={'Meire bolos'}
                    descPedido={'Bolo de Cenoura, Pedaço(300g)'} />

            </ScrollView>

        </SafeArea>
    )
}