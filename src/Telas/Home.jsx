import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Categories from "../Components/home/Categories";
import Products from "../Components/home/Products";
import HorizontalScroll from "../Components/HorizontalScroll";
import { POButton } from "../Components/POButton";
// import { ProductContainer } from "../Components/ProductContainer";
import SafeArea from "../Components/SafeArea";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";



export default function Home() {
  const navigation = useNavigation()
  const location = "Carapicuiba, São Paulo"
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
              {location}
            </Text>
            <MaterialIcons name="arrow-drop-down" size={50} color="#FF881D" />
          </View>
          <View
            style={{
              marginVertical: 5,
            }}
          >

            <HorizontalScroll scrollTitle={"Categorias"}>
                <Categories/>
            </HorizontalScroll>

          </View>

          <View style={{ marginVertical: 10 }}>
            <HorizontalScroll scrollTitle={"Destaques"}>
                <Products/>
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
                  styleBtn={"white"}
                  text={"Pedir Agora"}
                  BtnWidth={170}
                  BtnHeight={50}
                  fontSize={18}
                />
                <View style={{ width: 20 }}></View>
                <POButton
                  text={"Encomendar"}
                  BtnWidth={170}
                  BtnHeight={50}
                  fontSize={18}
                />
              </View>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontFamily: "PoppinsBold", fontSize: 18 }}>Lojas</Text>
              <TouchableOpacity onPress={()=>{ navigation.navigate('Loja') }}>
                <View
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
                  }}
                >
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
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeArea>
      </View>
    </ScrollView>
  );
}
