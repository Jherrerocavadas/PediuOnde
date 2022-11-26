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
                    fotoPedido={'https://www.nigiloc.com/images/image-not-found.png'}
                    fotoVendedor={'https://www.nigiloc.com/images/image-not-found.png'}
                    nomeVendedor={'Meire bolos'}
                    descPedido={'Bolo de Cenoura, 1kg, cobertura de chocolate'} />
                
                <BoxHistoricoCompras  
                    numPedido={123455} 
                    fotoPedido={'https://www.nigiloc.com/images/image-not-found.png'}
                    fotoVendedor={'https://www.nigiloc.com/images/image-not-found.png'}
                    nomeVendedor={'Marcos bolos'}
                    descPedido={'Bolo de Cenoura, 1kg, cobertura de chocolate'} />

            </ScrollView>

        </SafeArea>
    )
}