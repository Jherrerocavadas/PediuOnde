import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import Categories from "../Components/home/Categories";
import HorizontalScroll from "../Components/HorizontalScroll";
import { POButton } from "../Components/POButton";
import { ProductContainer } from "../Components/ProductContainer";
import SafeArea from "../Components/SafeArea";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()
  const [styleEncomenda, setStyleEncomenda] = useState('white')
  const [stylePAgora, setStylePAgora] = useState('white')

  const [displayEncomenda, setDisplayEncomenda] = useState('flex')
  const [displayPAgora, setDisplayPAgora] = useState('flex')

  return (
    <ScrollView>
      <View style={{flex:1, backgroundColor:'white'}}>
        <SafeArea>
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                fontFamily: "PoppinsSemiBold",
                fontSize: 20,
                marginBottom: -20,
                marginTop: 15,
              }}
            >
              Carapicuiba, São Paulo
            </Text>
            <MaterialIcons name="arrow-drop-down" size={50} color="#FF881D" />
          </View>
          <View
            style={{
              marginVertical: 5,
            }}
          >
            <HorizontalScroll scrollTitle={"Categorias"}>
              <Categories
                SaaS={"https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"}
                texto={"Bolos"}
              />
            </HorizontalScroll>
          </View>
          <View style={{ marginVertical: 10 }}>
            <HorizontalScroll scrollTitle={"Destaques"}>

              <TouchableOpacity onPress={()=>{ navigation.navigate('PagProduto') }}>
                <View style={{display:displayEncomenda}}>
                  <ProductContainer
                    imageUrl={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqS4EbhiRWPpik9K0oT7EvL1Z0qlbRMAzk2Rq9ydGTsM1ze_kgBXk3Go7sqb5O2g0AEsjx8o4VDSkhFN7jkn42khiNErDSlsnt-IC-LmHhqplB8hTWYXD3rOmf4fT1Qs6_5K4LnCg69pVtUgIL0YLdfFowLQcCDrZx9nVlNl9Iws2khcKY1BF5Zv_P/s1500/bolo-de-pote-0.jpg"}
                    Title={"Bolo de Pote"}
                    Description={"Aquele bolo de pote pra matar a vontade de um docinho depois do almoço! Temos sabores de: Leite Ninho, Maracujá, Chocolate e Abacaxi."}
                    Encomenda={true}/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ navigation.navigate('PagProduto') }}>
                <View style={{display:displayPAgora}}>
                  <ProductContainer
                    imageUrl={'https://assets.unileversolutions.com/recipes-v2/67405.jpg'}
                    Title={'Bolo de Cenoura'}
                    Description={'Bolo de cenoura feito com itens frescos, ideal para um café da tarde!'}
                    Encomenda={false}/>
                </View>
              </TouchableOpacity>
              
            </HorizontalScroll>
          </View>
          <View style={{ paddingHorizontal: 20, overflow: "visible" }}>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontFamily: "PoppinsBold", fontSize: 18 }}>
                Para Quando?
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}
              >
                <POButton
                  text={"Pedir Agora"}
                  BtnWidth={170}
                  BtnHeight={50}
                  fontSize={18}
                  setter={()=>{
                    if(stylePAgora == 'orange'){
                      setStylePAgora('white')
                      setDisplayEncomenda('flex')
                      console.log('fooi')

                    }
                    else{
                      setStylePAgora('orange')
                      setDisplayEncomenda('none')
                      setDisplayPAgora('flex')
                      setStyleEncomenda('white')
                    }
                  }}
                  styleBtn={stylePAgora}
                />
                <View style={{ width: 20 }}></View>
                  <POButton
                    text={"Encomendar"}
                    BtnWidth={170}
                    BtnHeight={50}
                    fontSize={18}
                    setter={()=>{
                      if(styleEncomenda == 'orange'){
                        setStyleEncomenda('white')
                        setDisplayPAgora('flex')
                      }
                      else{
                        setStylePAgora('white')
                        setStyleEncomenda('orange')

                        setDisplayPAgora('none')
                        setDisplayEncomenda('flex')
                      }
                    }}
                    styleBtn={styleEncomenda}
                  />
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontFamily: "PoppinsBold", fontSize: 18 }}>Lojas</Text>
              
                <TouchableOpacity onPress={()=>{ navigation.navigate('Loja') }}
                  style={{
                    backgroundColor: "white",
                    height: 65,
                    width: "100%",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    shadowColor: "black",
                    flexDirection: "row",
                    elevation: 5,
                    alignItems: "center",
                    padding: 10,
                    justifyContent: "space-between",
                  }}>
                  <View style={{ flexDirection: "row", alignItems: "center", backgroundColor:'white'}}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: "#FF881D",
                        overflow: "hidden",
                        marginRight: 10,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://joliz.com.br/dicas/wp-content/uploads/2022/02/pexels-brent-keane-1702373-scaled.jpg",
                        }}
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: "cover",
                        }}
                      />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 15,
                          fontFamily: "PoppinsBold",
                          marginBottom: -4,
                        }}
                      >
                        Bolos da Meire
                      </Text>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 13,
                          fontFamily: "PoppinsRegular",
                        }}
                      >
                        Bolos, Doces e Sobremesas!
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <MaterialIcons name="star-rate" size={25} color="#FF881D" />
                    <Text
                      style={{
                        color: "#FF881D",
                        fontSize: 13,
                        fontFamily: "PoppinsRegular",
                        marginTop: 4,
                        marginRight: 4,
                      }}
                    >
                      4,7
                    </Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </SafeArea>
      </View>
    </ScrollView>
  );
}
