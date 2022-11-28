import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import {POButton} from "../Components/POButton";
import POText from "../Components/POText";
import {FooterClient} from "../Components/Footer"
import SafeArea from "../Components/SafeArea";
import { useFonts } from "expo-font";
import { MaterialIcons } from '@expo/vector-icons';
import HorizontalScroll from "../Components/HorizontalScroll";
import { ProductContainer, ProductContainerDetailed } from "../Components/ProductContainer";
import BackBtn from "../Components/BackBtn";
import { useNavigation } from "@react-navigation/native";

export default function PagLoja() {

  const navigation = useNavigation()
  const [fontsLoaded] = useFonts({
    PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
    PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBlack: require('../../assets/fonts/Poppins-Bold.ttf'),
  })

  return (
    <>
    <SafeArea>
      <BackBtn/>
      <View style={{width:'100%', aspectRatio:16/9}}>
        <Image source={{uri:'https://www.nigiloc.com/images/image-not-found.png'}} 
               style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
      </View>

      <View style={{flexDirection:"row", width:'100%', paddingHorizontal:20, justifyContent:'space-between', marginTop:20, alignItems:'center'}}>
        <Text style={{fontFamily:'PoppinsBold', fontSize:22}}>Bolos da Meire</Text>
        <View style={{flexDirection:'row', marginTop:-8}}>
            <MaterialIcons name="star-rate" size={30} color="#FF881D" />
            <Text style={{color:'#FF881D', fontSize:16, fontFamily:'PoppinsRegular', marginTop:4, marginRight:4}}>4,7</Text>
        </View>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-around', paddingHorizontal:20, marginTop:15, marginBottom:20}}>
        <POButton text={'Pedir Agora'} styleBtn={'white'} BtnHeight={50} BtnWidth={170} fontSize={18}/>
        <POButton text={'Encomendar'} styleBtn={'white'} BtnHeight={50} BtnWidth={170} fontSize={18}/>
      </View>

      <View style={{margin:0}}>
        <HorizontalScroll scrollTitle={'Os mais vendidos'} scrollTitleBottomSpace={0}> 
          <ProductContainer imageUrl={'https://www.nigiloc.com/images/image-not-found.png'} Title={'Bolo de Casamento'} Description={'Monte o seu bolo de casamento! Temos diversos sabores!'} Encomenda={true}/>
        </HorizontalScroll>        
      </View>



      <View style={{marginTop:-15, marginBottom:10}}>
        <HorizontalScroll>
          <Text style={{fontFamily:'PoppinsBold', marginHorizontal:20, fontSize:16}}>Bolos de Pote</Text>
          <Text style={{fontFamily:'PoppinsBold', marginHorizontal:20, fontSize:16}}>Bolos Clássicos</Text>
          <Text style={{fontFamily:'PoppinsBold', marginHorizontal:20, fontSize:16}}>Bolos Especiais</Text>
        </HorizontalScroll>        
      </View>


      <View style={{paddingHorizontal:20}}>
        <ProductContainerDetailed imageUrl={'https://www.nigiloc.com/images/image-not-found.png'} 
                                  Title={'Bolo de Pote'} 
                                  Description={'Aquele bolo de pote pra matar a vontade de um docinho depois do almoço! Temos sabores de: Leite Ninho, Maracujá, Chocolate e Abacaxi.'} 
                                  Encomenda={true}/>

      </View>

    </SafeArea>

    </>
  );
}
