import React, {useEffect, useState} from "react";
import MapView from "react-native-maps";
import SafeArea from "../Components/SafeArea";
import * as Location from 'expo-location'
import { POText } from "../Components/POText";
import CircularImg from "../Components/CircularImg";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { POButton } from "../Components/POButton";
import BackBtn from "../Components/BackBtn";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Entrega(){
    
    const navigation = useNavigation()
    const [location, setLocation] = useState(null);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Deu ruim my noble :/');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});

            setLocation({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014

            })
      })();
    }, []);

    return(
        <SafeArea>
            <TouchableOpacity onPress={()=>{ navigation.navigate('ResumoPedido') }}>
                <BackBtn/>
            </TouchableOpacity>
            <ScrollView>
            <View style={{width:'100%', paddingHorizontal:20}}>
                <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
                    <POText weight='Black' size={22}>Pedido</POText>            
                </View>

                <View style={{marginBottom:-10}}>
                    <POText size={20} weight={'Bold'}>Seu pedido está a caminho:</POText>

                </View>
                <POText size={18} textColor={'#5e5e5e'}>Previsão de entrega: 18:30 - 18:50</POText>
                <View style={{borderRadius:10, overflow:'hidden', marginBottom:15, borderWidth:2, borderColor:"#FF881D"}}>
                    <MapView style={{width:'100%', aspectRatio:16/9}} region={location}/>
                </View>

                <POText size={18} weight={'Bold'}>Entregador:</POText>

                <View style={{flexDirection:'row', borderWidth:2,height:80, marginBottom:10, alignItems:'center',justifyContent:'space-between', borderColor:'#E6E6E6', borderRadius:10, padding:10}}>
                    
                    <View style={{marginHorizontal:10}}>
                        <CircularImg size={60} border={false}/>
                    </View>

                    <View>
                        <POText size={16} weight={'Bold'}>Rodonelson</POText>
                        <POText size={14}>Entrega desde Dez - 2022</POText>
                    </View>
                    <View style={{flexDirection:'row', height:'100%'}}>
                        <Text style={{color:'#FF881D', fontSize:13, fontFamily:'PoppinsRegular', marginTop:1, marginRight:4}}>4,9</Text>
                        <MaterialIcons name="star-rate" size={17} color="#FF881D"/>
                    </View>   
                </View>

                <POText size={18} weight={'Bold'}>Resumo</POText>

                <View style={{borderWidth:2, borderColor:'#FF881D', borderRadius:10, marginBottom:10}}>
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', borderRadius:10,padding:10}}>
                        <View style={{flexDirection:'row', borderRadius:10}}>
                            
                            <View style={{marginRight:20}}>
                                <CircularImg size={40} border={false}/>
                            </View>

                            <View>
                                <POText size={17} weight={'Black'}>Bolo de pote</POText>
                                <POText size={14} heightLine={16} textColor={'#5e5e5e'}>{'1x - Chocolate\n2x - Leite Ninho\n1x - Maracujá'}</POText>
                            </View>

                        </View>

                        <POText size={17} weight={'Bold'}>R$ 55,50</POText>
                    </View>
                    <View style={{flexDirection:'row', alignItems:"center", width:'100%', justifyContent:'space-between', paddingLeft:70, borderRadius:10, paddingRight:3}}>
                        <View>
                            <POText size={17} heightLine={18} weight={'Black'}>Forma de Pagamento</POText>
                            <POText size={14} heightLine={17} textColor={'#5e5e5e'}>Cartão de Crédito</POText>                    
                        </View>                    
                        <Image source={{uri:'https://cdn.discordapp.com/attachments/984814568725442600/1046457493892644954/3_21.png'}} 
                        style={{width:60, height:55}}/>    
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <POText size={18} weight={'Bold'}>Precisa falar com a loja?</POText>
                    <TouchableOpacity onPress={()=>{ navigation.navigate('Chat') }}>
                        <POButton text={'Falar com a loja'} styleBtn={'orange'} BtnWidth={'100%'} shadow={false} />
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeArea>

    )
}