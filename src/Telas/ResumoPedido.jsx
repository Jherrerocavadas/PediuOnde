import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import CircularImg from "../Components/CircularImg";

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import ItenSacola from "../Components/ItenSacola";
import {POButton} from "../Components/POButton";
import {POText} from "../Components/POText";
import SafeArea from "../Components/SafeArea";
import { MaterialIcons } from '@expo/vector-icons';
import BackBtn from "../Components/BackBtn";
import { useNavigation } from "@react-navigation/native";


export default function ResumoPedido() {
const navigation = useNavigation()

  return (
    <SafeArea>
        <BackBtn  nav={navigation} destiny={'PagProduto'}/>
      <ScrollView>

        <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
          <POText weight='Black' size={22}>Minhas Compras</POText>            
        </View>

        <View style={{width:'100%', paddingHorizontal:20}}>
          
          <POText size={16}>Resumo do pedido:</POText>
          
          <View style={{flexDirection:'row', alignItems:'center', height:90, borderWidth:2, borderColor:'#FF881D', paddingHorizontal:13, borderRadius:10}}>
            <CircularImg size={60} border={false} imgUrl={'https://joliz.com.br/dicas/wp-content/uploads/2022/02/pexels-brent-keane-1702373-scaled.jpg'}/>

            <View style={{marginLeft:13, marginTop:2}}>
              <POText size={20} weight="Bold">Bolos da Meire</POText>
            </View>
          </View>

          <View style={{marginVertical:20}}>
            <ItenSacola 
              nomeProduto={'Bolo de Cenoura'} 
              descricaoPedido={'Pedaço (300g)'}
              imgUrl={'https://assets.unileversolutions.com/recipes-v2/67405.jpg'}/>            
          </View>

          <View>
            <POText weight="Bold" size={18}>Resumo dos valores:</POText>
            
            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
              <POText size={16} textColor={'#5e5e5e'}>Subtotal:</POText>
              <POText size={16} textColor={'#5e5e5e'}>R$ 9,90</POText>
            </View>

            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
              <POText size={16} textColor={'#5e5e5e'}>Taxa de entrega:</POText>
              <POText size={16} textColor={'#5e5e5e'}>R$ 3,50</POText>
            </View>

            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
              <POText size={16} textColor={'#5e5e5e'}>Desconto:</POText>
              <POText size={16} textColor={'#5e5e5e'}>R$ 0,00</POText>
            </View>

            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
              <POText size={16} weight={'Bold'}>Total:</POText>
              <POText size={16} weight={'Bold'}>R$ 13,40</POText>
            </View>

          </View>

          <View style={{marginVertical:10}}>
            <POText size={16} weight='Bold'>Pagamento:</POText>

            <View style={{flexDirection:'row', marginBottom:10, alignItems:'center',justifyContent:'space-between', height:90, borderWidth:2, borderColor:'#FF881D', paddingHorizontal:13, borderRadius:10}}>
              <View>
                <POText textColor="#5e5e5e" size={14}>Cartão de crédito</POText>
                <View style={{margin:-10}}>
                  <Image source={{uri:'https://cdn.discordapp.com/attachments/984814568725442600/1046457493892644954/3_21.png'}}
                      style={{width:65, height:55}}/>
                </View>           
              </View>  
              <POButton  styleBtn={'orange'} text={'Adicionar'} shadow={false} BtnWidth={100} BtnHeight={35} fontSize={14}  />
            </View>

            <View style={{flexDirection:'row', marginBottom:10, alignItems:'center',justifyContent:'space-between', height:90, borderWidth:2, borderColor:'#FF881D', paddingHorizontal:13, borderRadius:10}}>
              <View>
                <POText textColor="#5e5e5e" size={14}>Dinheiro</POText>
                <Image source={{uri:'https://cdn.discordapp.com/attachments/893932697473409026/1047064357042917446/img_452026.png'}} 
                    style={{width:66, height:33}}/>            
              </View>  
              <POButton  styleBtn={'orange'} text={'Adicionar'} shadow={false} BtnWidth={100} BtnHeight={35} fontSize={14}  />
            </View>

            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', height:90, borderWidth:2, borderColor:'#FF881D', paddingHorizontal:13, borderRadius:10}}>
              <View>
                <POText textColor="#5e5e5e" size={14}>Cpf na nota?</POText>
                <Image source={{uri:'https://cdn.discordapp.com/attachments/984814568725442600/1046457792342540368/img_453796.png'}} 
                    style={{width:51, height:43}}/>            
              </View> 
              <POButton  styleBtn={'orange'} text={'Adicionar'} shadow={false} BtnWidth={100} BtnHeight={35} fontSize={14}  />
            </View>

          </View>


        </View>

      </ScrollView>

      <View style={{paddingHorizontal:20, backgroundColor:'white', height:80, justifyContent:'center',
        shadowColor:'black'}}>
        <TouchableOpacity onPress={()=>{ navigation.navigate('Entrega') }}>
          <POButton text={'Finalizar Pagamento'} shadow={false} BtnWidth={'100%'}/>
        </TouchableOpacity>
      </View>
    </SafeArea>
    
  );
}
