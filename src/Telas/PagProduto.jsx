import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import BackBtn from '../Components/BackBtn'
import SafeArea from '../Components/SafeArea'
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalScroll from "../Components/HorizontalScrollOLD";
import { POText } from '../Components/POText';
import { ScrollView } from 'react-native-gesture-handler';
import Avaliacoes from '../Components/Avaliacoes';
import { POButton } from '../Components/POButton';
import { useNavigation } from "@react-navigation/native";
import { POInputProduct } from '../Components/POTextInput';
import Variations from "../Components/Produto/Variations"


export default function PagProduto(){
    const nome = "Bolo de Cenoura"
    const vendedor = "Bolos da Meire"
    const descricao =  "Bolo de cenoura feito com itens frescos, ideal para um café da tarde!"
    const imagePath = "https://assets.unileversolutions.com/recipes-v2/67405.jpg"
    const preco = 9.90
    const ingredientes = ""
    const categoria = ""
    const aceitaEncomenda = ""
    const variacoesProduto = ""
    const numAvaliacoes = 16
    const mediaAvaliacao = 4.4
    const [quantidade, setQuantidade] = useState(1)
    const navigation = useNavigation()
    const [valor, setValor] = useState(preco)



    return(
        <SafeArea>
            <BackBtn  nav={navigation} destiny={'Inicio'}/>
            <ScrollView>

                <View style={{width:'100%', aspectRatio:16/9}}>
                    <Image source={{uri:imagePath}}
                        style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
                </View>

                <View style={{flexDirection:"row", marginBottom:-8,  width:'100%', paddingHorizontal:20, justifyContent:'space-between', marginTop:20, alignItems:'center'}}>
                    <Text style={{fontFamily:'PoppinsBold', fontSize:22}}>{nome}</Text>
                    <View style={{flexDirection:'row', marginTop:-8}}>
                        <MaterialIcons name="star-rate" size={30} color="#FF881D" />
                        <Text style={{color:'#FF881D', fontSize:16, fontFamily:'PoppinsRegular', marginTop:4, marginRight:4}}>4,4</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', height:35, alignItems:'center', marginLeft:20}}>
                    <POText size={16} >{vendedor}</POText>
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
                    <POText size={14} textColor={'#696969'}>{descricao}</POText>
                </View>
                <Variations /*variacoesProduto={{produto.variacoesProduto}}*//>

                <View style={{paddingHorizontal:20, width:'100%', marginTop:20, marginBottom:100}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:10}}>
                        <POText size={18} textColor={'#696969'}>({numAvaliacoes})</POText>

                        <View style={{marginHorizontal:15, marginTop:4}}>
                            <POText size={18}>Avaliações</POText>
                        </View>
                        <MaterialIcons name="star-rate" size={23} color="#FF881D" />
                        <Text style={{color:'#FF881D', fontSize:16, fontFamily:'PoppinsRegular', marginTop:7, marginRight:4}}>{mediaAvaliacao}</Text>
                    </View>
                    {/* Criar banco das Avaliações */}
                    {/* Avaliacoes productID=id do produto */}
                    <Avaliacoes autor={'Toninho'} descricao={'Gostoso.mas veio com.pouco recheio...'} avaliacao={3}></Avaliacoes>
                    <Avaliacoes autor={'Marcos'} descricao={'Muito Gostoso!'} avaliacao={5}></Avaliacoes>
                    <Avaliacoes autor={'Joice'} descricao={'Um ótimo bolo, parabéns migaaa'} avaliacao={5}></Avaliacoes>
                    {/*end*/}
                </View>
            </ScrollView>


                <View style={{flexDirection:'row', position:'absolute', bottom:'0%', height:80, width:'100%', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, backgroundColor:'white'}}>
                    <View>
                        <POText size={18} weight={'Bold'}>Quantidade:</POText>
                        <View style={{marginTop:-5, flexDirection:'row', width:100, height:45, justifyContent:'space-between', alignItems:'center'}}>

                        {/* Tá dando doidera o esquema da quantidade*/}
                            <TouchableOpacity onPress={ ()=>{
                                if (quantidade > 0){
                                    setQuantidade((quantidade - 1));
                                    setValor((preco * quantidade))
                                    }
                                else {
                                  setQuantidade(1);
                                }

                                } }>
                                <POText size={24} weight={'Black'} textColor='#FF881D'>-</POText>
                            </TouchableOpacity>

                                <View style={{ width:50, height:40, borderWidth:2, borderColor:'#FF881D', alignItems:'center',borderRadius:10, justifyContent:'center', paddingTop:3 }}>
                                    <POText>{quantidade}</POText>
                                </View>

                            <TouchableOpacity onPress={ ()=>{
                                setQuantidade((quantidade + 1))
                                setValor((preco * quantidade))
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
