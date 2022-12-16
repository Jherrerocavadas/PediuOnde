import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { POButton } from './POButton'
import { POText } from './POText'
import { MaterialIcons } from '@expo/vector-icons';

export default function BoxHistoricoCompras({fotoVendedor, nomeVendedor, numPedido, fotoPedido, descPedido}){

    if (nomeVendedor.lenght > 18) nomeVendedor = nomeVendedor.slice(0, 18) + '...'
    
    const centerAll=StyleSheet.create({
        justifyContent:'center', 
        alignItems:'center'
    })

    const containerAll = {
        width:'100%',
        shadowColor:'black', 
        paddingHorizontal:10, 
        backgroundColor:'white',
        marginBottom:20
    }
    
    const imageStyle = {
        flex:1, 
        width:null, 
        height:null, 
        resizeMode:'cover'
    }

    const containerVendedor = {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        height:70, 
        paddingHorizontal:10
    }

    const subContainer = {
        borderWidth:2, 
        borderColor:'#E6E6E6', 
        borderRadius:10, 
        backgroundColor:'white'
    }

    const imageVendedor = {
        width:50, 
        height:50, 
        borderRadius:40, 
        overflow:'hidden', 
        borderWidth:1,
        borderColor:'#FF881D',
        marginRight:10
    }

    const containerPedido={
        flexDirection:'row', 
        height:55, 
        borderTopWidth:1, 
        borderColor:'#E6E6E6', 
        alignItems:'center', 
        paddingHorizontal:10
    }

    const checkStyle = {
        borderRadius:40, 
        overflow:'hidden', 
        backgroundColor:'#14FF00', 
        width:30, 
        height:30, 
        alignItems:'center', 
        justifyContent:'center', 
        marginRight:9
    }

    const containerDescPedido = {
        flexDirection:'row', 
        alignItems:'center', 
        borderTopWidth:1, 
        borderColor:'#E6E6E6'
    }

    const containerBtns={
        padding:10, 
        borderTopWidth:1, 
        borderColor:'#E6E6E6'
    }

    return(
            <View style={containerAll}>
                <View style={subContainer}>

                    <View style={containerVendedor}>
                        
                        <View style={{flexDirection:'row', 
                                    alignItems:'center'}}>
                            
                            <View style={imageVendedor}>
                                <Image 
                                    source={{uri:fotoVendedor}} 
                                    style={imageStyle}/>                    
                            </View>
                            <POText weight='Bold' size={18}>{nomeVendedor}</POText>

                        </View>

                        <POButton 
                            styleBtn={'orange'} 
                            BtnHeight={40} 
                            BtnWidth={100} 
                            fontSize={18} 
                            text={'Visitar'}
                            shadow={false}/>
                    </View>

                    <View style={containerPedido}>
                        
                        <View style={{
                                width:57, 
                                ...centerAll
                            }}>

                            <View style={checkStyle}>
                                <MaterialIcons 
                                    name='check' 
                                    color={'white'} 
                                    size={20}/>              
                            </View>                     

                        </View>

                        <POText size={16}>Pedido Concluído - n° {numPedido}</POText>
                    </View>

                    <View style={containerDescPedido}>
                        <View style={{height:100, aspectRatio:1/1, overflow:'hidden', marginRight:10, alignItems:'center', justifyContent:'center'}}>
                            <Image 
                                source={{uri:fotoPedido}} 
                                style={{height:90, width:90, borderRadius:10}}/>                    
                        </View>
                        <View style={{width:300}}>
                            <POText size={14}>{descPedido}</POText>
                        </View>
                    </View>

                    <View style={containerBtns}>
                        
                        <View style={{ flexDirection:'row', width:'100%',alignItems:'center', justifyContent:'space-between'}}>
                            <POButton 
                                text={'Pedir de Novo'} 
                                BtnHeight={35} 
                                fontSize={16}
                                shadow={false}/>
                            
                            <View style={{marginBottom:5}}>
                                <POButton
                                    styleBtn={'white'}
                                    BtnHeight={35}
                                    text={'Ajuda'}
                                    fontSize={16}
                                    shadow={false}/>
                            </View>                    
                        </View>
                    </View>      
                </View>          
            </View>
           
    )
}