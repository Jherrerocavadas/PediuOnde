import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import BackBtn from '../Components/BackBtn'
import SafeArea from '../Components/SafeArea'
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalScroll from "../Components/HorizontalScroll";
import { POText } from '../Components/POText';
import { ScrollView } from 'react-native-gesture-handler';
import Avaliacoes from '../Components/Avaliacoes';
import { POButton } from '../Components/POButton';
import { useNavigation } from "@react-navigation/native";
import { POInputProduct } from '../Components/POTextInput';



export default function PagProduto(){
    const [quantidade, setQuantidade] = useState(1)
    const navigation = useNavigation()
    const [valor, setValor] = useState(9.90)


    function moreOne(){
        setValor(9.90 * quantidade)
        setQuantidade(quantidade + 1) 
        if(quantidade == 1){
            setValor(9.90)
        }
        if(quantidade == 2){
            setValor(19.80)
        }

    }


    return(
        <SafeArea>
            <BackBtn  nav={navigation} destiny={'Inicio'}/>
            <ScrollView>
                
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
                    <POText weight='Black' textColor='#FF881D' size={24}>R${valor.toFixed(2)}</POText>
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
                <View style={{paddingHorizontal:20, width:'100%', marginTop:20, marginBottom:100}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:10}}>
                        <POText size={18} textColor={'#696969'}>(16)</POText>
                
                        <View style={{marginHorizontal:15, marginTop:4}}>
                            <POText size={18}>Avaliações</POText>
                        </View>
                        <MaterialIcons name="star-rate" size={23} color="#FF881D" />
                        <Text style={{color:'#FF881D', fontSize:16, fontFamily:'PoppinsRegular', marginTop:7, marginRight:4}}>4,4</Text>
                    </View>
                    <Avaliacoes autor={'Toninho'} descricao={'Gostoso.mas veio com.pouco recheio...'} avaliacao={3}></Avaliacoes>
                    <Avaliacoes autor={'Marcos'} descricao={'Muito Gostoso!'} avaliacao={5}></Avaliacoes>
                    <Avaliacoes autor={'Joice'} descricao={'Um ótimo bolo, parabéns migaaa'} avaliacao={5}></Avaliacoes>
                </View>
            </ScrollView>

            
                <View style={{flexDirection:'row', position:'absolute', bottom:'0%', height:80, width:'100%', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, backgroundColor:'white'}}>
                    <View>
                        <POText size={18} weight={'Bold'}>Quantidade:</POText>
                        <View style={{marginTop:-5, flexDirection:'row', width:100, height:45, justifyContent:'space-between', alignItems:'center'}}>
                            
                            <TouchableOpacity onPress={ ()=>{ 
                                if (quantidade > 0){
                                    setQuantidade(quantidade - 1); 
                                    setValor(9.90 * quantidade) }

                                } }>
                                <POText size={24} weight={'Black'} textColor='#FF881D'>-</POText>
                            </TouchableOpacity>

                                <View style={{ width:50, height:40, borderWidth:2, borderColor:'#FF881D', alignItems:'center',borderRadius:10, justifyContent:'center', paddingTop:3 }}>
                                    <POText>{quantidade}</POText>
                                </View>

                            <TouchableOpacity onPress={ ()=>{
                                if(quantidade == 1){
                                    setValor(9.90)
                                }
                                if(quantidade == 2){
                                    setValor(19.90)
                                }
                                moreOne()
                                } } >
                                <POText size={24} weight={'Black'} textColor='#FF881D'>+</POText>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() =>{ navigation.navigate('ResumoPedido') }}>
                        <POButton BtnHeight={50} BtnWidth={180} fontSize={16} text={'Adicionar a Sacola'}/>
                    </TouchableOpacity>
                </View>

        </SafeArea>
    )
}