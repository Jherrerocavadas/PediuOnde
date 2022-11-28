import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import BackBtn from '../Components/BackBtn'
import SafeArea from '../Components/SafeArea'
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalScroll from "../Components/HorizontalScroll";
import { ProductContainer, ProductContainerDetailed } from "../Components/ProductContainer";
import { POText } from '../Components/POText';
import { ScrollView } from 'react-native-gesture-handler';
import Avaliacoes from '../Components/Avaliacoes';
import OpcoesHorizontais from '../Components/OpcoesHorizontais';
import { POInputProduct } from '../Components/POTextInput';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { POButton } from '../Components/POButton';

export default function PagProdutoEncomenda(){

const navigation = useNavigation()
    return(
        
        <SafeArea>
            <BackBtn/>
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
            <OpcoesHorizontais 
                opcoes={['Morango', 'Chocolate', 'Leite Ninho', 'Abacaxi']} 
                titleScroll={'Sabor'}/>

            <OpcoesHorizontais 
                opcoes={['2KG', '5KG', '10KG', '15KG', '20KG']}
                titleScroll={'Tamanho'}/>

            <View style={{paddingHorizontal:20, marginVertical:5}}>
                <POInputProduct title={'Alguma cor específica?'}/>
            </View>

            <View style={{paddingHorizontal:20, marginVertical:5}}>
                <POInputProduct 
                    placeholderInput={'Digite seu comentário'} 
                    title={'Algum comentário?'} 
                    heightInput={150} 
                    moreLines={true} 
                    borderRadiusInput={10}
                    alignCenter={'top'}
                    numLines={4}/>
            </View>
            </ScrollView>
            <TouchableOpacity onPress={() =>{ navigation.navigate('ResumoPedido') }}>
                <View style={{flexDirection:'row', position:'absolute', bottom:'0%', height:80, width:'100%', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, backgroundColor:'white'}}>
                    <View>
                        <POText size={18} weight={'Bold'}>Total do Pedido:</POText>
                        <View style={{marginTop:-10}}>
                            <POText size={20} weight={'Black'} textColor='#FF881D'>R$0,00</POText>
                        </View>
                    </View>
                    <POButton BtnHeight={50} BtnWidth={170} text={'Encomendar'}/>
                </View>
            </TouchableOpacity>
            </SafeArea>
    )}

    