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
import { ScrollView } from "react-native-gesture-handler";

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
    <ScrollView>
      <SafeArea>
        <BackBtn nav={navigation} destiny={'Inicio'}/>
        <View style={{width:'100%', aspectRatio:16/9}}>
          <Image source={{uri:'https://joliz.com.br/dicas/wp-content/uploads/2022/02/pexels-brent-keane-1702373-scaled.jpg'}}
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

            <TouchableOpacity onPress={()=>{ navigation.navigate('PagProduto') }}>
              <ProductContainer
                imageUrl={'https://assets.unileversolutions.com/recipes-v2/67405.jpg'}
                Title={'Bolo de Cenoura'}
                Description={'Bolo de cenoura feito com itens frescos, ideal para um café da tarde!'}
                Encomenda={false}/>
            </TouchableOpacity>

          </HorizontalScroll>
        </View>
        <View style={{marginTop:-15, marginBottom:10,width:'100%', justifyContent:'center', alignItems:'center'}}>
          <HorizontalScroll>
            <View style={{width:'100%',  alignItems:'center'}}>
              <Text style={{fontFamily:'PoppinsBold', marginHorizontal:20, fontSize:18}}>Bolos</Text>
              <View style={{width:60, height:2, backgroundColor:'#FF881D'}} />
            </View>
          </HorizontalScroll>
        </View>
        <View style={{paddingHorizontal:20, marginBottom:30}}>

          <ProductContainerDetailed imageUrl={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqS4EbhiRWPpik9K0oT7EvL1Z0qlbRMAzk2Rq9ydGTsM1ze_kgBXk3Go7sqb5O2g0AEsjx8o4VDSkhFN7jkn42khiNErDSlsnt-IC-LmHhqplB8hTWYXD3rOmf4fT1Qs6_5K4LnCg69pVtUgIL0YLdfFowLQcCDrZx9nVlNl9Iws2khcKY1BF5Zv_P/s1500/bolo-de-pote-0.jpg'}
            Title={'Bolo de Pote'}
            Description={'Aquele bolo de pote pra matar a vontade de um docinho depois do almoço! Temos sabores de: Leite Ninho, Maracujá, Chocolate e Abacaxi.'}
            Encomenda={true}/>
            
            <View style={{height:15}}/>

          <ProductContainerDetailed imageUrl={'https://assets.unileversolutions.com/recipes-v2/67405.jpg'}
            Title={'Bolo de Cenoura'}
            Description={'Bolo de cenoura feito com itens frescos, ideal para um café da tarde!'}/>

        </View>
      </SafeArea>
    </ScrollView>

    </>
  );
}
