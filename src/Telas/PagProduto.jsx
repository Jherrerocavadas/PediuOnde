import React from 'react'
import { View, Image, Text } from 'react-native'
import BackBtn from '../Components/BackBtn'
import SafeArea from '../Components/SafeArea'
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalScroll from "../Components/HorizontalScroll";
import { ProductContainer, ProductContainerDetailed } from "../Components/ProductContainer";
import { POText } from '../Components/POText';
import { ScrollView } from 'react-native-gesture-handler';
import Avaliacoes from '../Components/Avaliacoes';


export default function PagProduto(){

    return(
        <>
        <SafeArea>
            <BackBtn/>
            <View style={{width:'100%', aspectRatio:16/9}}>
                <Image source={{uri:'https://assets.unileversolutions.com/recipes-v2/67405.jpg'}} 
                    style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
            </View>

            <View style={{flexDirection:"row", marginBottom:-8,  width:'100%', paddingHorizontal:20, justifyContent:'space-between', marginTop:20, alignItems:'center'}}>
                <Text style={{fontFamily:'PoppinsBold', fontSize:22}}>Bolo de Cenoura</Text>
                <View style={{flexDirection:'row', marginTop:-8}}>
                    <MaterialIcons name="star-rate" size={30} color="#FF881D" />
                    <Text style={{color:'#FF881D', fontSize:16, fontFamily:'PoppinsRegular', marginTop:4, marginRight:4}}>4,4</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', height:35, alignItems:'center', marginLeft:20}}>
                <POText size={16} >Bolos da Meire</POText>
                <View style={{flexDirection:'row', marginLeft:7, marginTop:-2}}>
                    <MaterialIcons name="star-rate" size={20} color="#FF881D" />
                    <Text style={{color:'#FF881D', fontSize:14, fontFamily:'PoppinsRegular', marginTop:1, marginRight:4}}>4,7</Text>
                </View>
            </View>

            <View style={{width:'100%', paddingHorizontal:20, marginTop:-10}}>
                <POText weight='Black' textColor='#FF881D' size={24}>R$9,90</POText>
                <View style={{borderBottomWidth:2, borderColor:'#FF881D'}}/>
            </View>

            <View style={{paddingHorizontal:20, marginTop:7, marginBottom:10}}>
                <POText size={18}>Descrição</POText>
                <POText size={14} textColor={'#696969'}>Bolo de cenoura feito com itens frescos, ideal para um café da tarde!</POText>
            </View>

            <HorizontalScroll scrollTitle={'Tamanho'} scrollTitleBottomSpace={5}>
                <View style={{borderWidth:2, borderColor:'#FF881D', flexDirection:'row', borderRadius:30, marginHorizontal:20, overflow:'hidden'}}>
                    <View style={{paddingHorizontal:10, paddingVertical:10, borderRadius:30, backgroundColor:'#FF881D'}}>
                        <POText size={16} textColor={'white'}>Pedaço(300g)</POText>
                    </View>
                    <View style={{paddingHorizontal:10, paddingVertical:10, borderRadius:30}}>
                        <POText size={16}>Pedaço(500g)</POText>
                    </View>
                    <View style={{paddingHorizontal:10, paddingVertical:10, borderRadius:30}}>
                        <POText size={16}>Inteiro(1kg)</POText>
                    </View>
                    <View style={{paddingHorizontal:10, paddingVertical:10, borderRadius:30}}>
                        <POText size={16}>Inteiro(2kg)</POText>
                    </View>
                </View>
            </HorizontalScroll>

            <View style={{paddingHorizontal:20, height:100, width:'100%', marginTop:20}}>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:10}}>
                    <POText size={18} textColor={'#696969'}>(16)</POText>
                    <View style={{marginHorizontal:15, marginTop:4}}>
                        <POText size={18}>Avaliações</POText>

                    </View>
                    <MaterialIcons name="star-rate" size={23} color="#FF881D" />
                    <Text style={{color:'#FF881D', fontSize:16, fontFamily:'PoppinsRegular', marginTop:7, marginRight:4}}>4,4</Text>
                </View>

                <Avaliacoes autor={'Toninho'} descricao={'Bolo gelado, onde já se viu algo assim? Paia d++++ hein dona meire, decepcionado >:('} avaliacao={2}></Avaliacoes>
                <Avaliacoes autor={'GigaChad'} descricao={'Ótimo bolo vó, um dos melhores q já comi'} avaliacao={100}></Avaliacoes>
            </View>

        </SafeArea>
        </>
    )
}