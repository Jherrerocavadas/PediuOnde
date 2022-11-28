import React from "react";
import { LineChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import { View } from "react-native";
import SafeArea from "../../Components/SafeArea";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { POText } from "../../Components/POText";
import Avaliacoes from "../../Components/Avaliacoes";

function Tabelinha({ dados }) {
  const semana = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "#FF881D",
          borderRadius: 10,
          width: "100%",
          justifyContent: "center",
          paddingRight: 40,
          paddingLeft: 30,
        }}
      >
        <View style={{ right: 10 }}>
          <YAxis
            style={{ height: 200 }}
            data={dados}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              fill: "grey",
              fontSize: 16,
            }}
            numberOfTicks={5}
            formatLabel={(value) => value}
          />
        </View>

        <View style={{ width: "100%" }}>
          <LineChart
            style={{ height: 200 }}
            data={dados}
            gridMin={0}
            gridMax={20}
            ticks={5}
            animate={true}
            numberOfTicks={5}
            svg={{ stroke: "#FF881D", strokeWidth: 2 }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid ticks={5} />
          </LineChart>

          <XAxis
            style={{ marginHorizontal: -10 }}
            data={dados}
            formatLabel={(value, index) => semana[index]}
            contentInset={{ left: 15, right: 15 }}
            svg={{ fontSize: 15, fill: "black" }}
          />
        </View>
      </View>
    </>
  );
}

export default function Analytics() {
  return (
    <SafeArea>
      <ScrollView>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <POText size={18} weight={"Bold"}>
              Bolos da Meire
            </POText>
            <MaterialIcons
              name="star-rate"
              size={22}
              color={"#FF881D"}
              style={{ marginTop: -7 }}
            />
            <POText size={16} textColor={"#FF881D"}>
              4,7
            </POText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="arrow-drop-up"
                style={{ marginRight: -10 }}
                size={38}
                color={"#14FF00"}
              />
              <POText size={12} textColor={"#14FF00"}>
                0,2pts
              </POText>
            </View>
          </View>

          <View style={{ marginBottom: -10 }}>
            <POText size={18} weight={"Bold"}>
              Total de Ganhos
            </POText>
          </View>
          <POText size={20} weight="Black" textColor={"#FF881D"}>
            R$370,29
          </POText>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <POText size={20} weight={"Black"}>
              Analytics
            </POText>
            <View
              style={{
                left: 3,
                bottom: 3,
                borderBottomWidth: 2,
                width: 120,
                borderColor: "#FF881D",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ marginBottom: -10 }}>
                <POText size={17} weight={"Bold"}>
                  Pedidos Entregues
                </POText>
              </View>
              <POText size={22} weight={"Black"} textColor={"#FF881D"}>
                170
              </POText>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={{ marginBottom: -10 }}>
                <POText size={17} weight={"Bold"}>
                  Pedidos Pendentes
                </POText>
              </View>
              <POText size={22} weight={"Black"} textColor={"#5e5e5e"}>
                20
              </POText>
            </View>
          </View>
          <View style={{ marginBottom: 15 }}>
            <Tabelinha dados={[0, 4, 0, 5, 15, 9, 20]} />
          </View>

          <POText size={18} weight={"Bold"}>
            Encomendas Pendentes
          </POText>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
              borderWidth: 2,
              borderColor: "#E6E6E6",
              borderRadius: 10,
            }}
          >
            <View>
              <View style={{ marginBottom: -8 }}>
                <POText size={20} weight="Bold">
                  Bolo de Casamento
                </POText>
              </View>
              <View style={{ marginBottom: -5 }}>
                <POText size={14} textColor={"#5e5e5e"}>
                  Av. Alguma coisa ai, 2022
                </POText>
              </View>
              <POText size={14} textColor={"#5e5e5e"}>
                Bolo de chocolate, 20kg, com enfe...
              </POText>
            </View>

            <View style={{ alignItems: "center" }}>
              <View style={{ marginBottom: -10 }}>
                <POText weight="Bold" size={18} textColor={"#5e5e5e"}>
                  Data
                </POText>
              </View>
              <POText weight="Black" textColor="#FF881D">
                30/11
              </POText>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <POText size={18} weight={"Bold"}>
              Avaliações Recentes
            </POText>
            <View
              style={{
                left: 2,
                bottom: 3,
                borderBottomWidth: 2,
                width: 200,
                borderColor: "#FF881D",
              }}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginBottom:-10,
                paddingHorizontal:5
              }}>
              <POText size={18} weight={"Bold"}>
                Bolos de Cenoura
              </POText>
              <View style={{ marginTop: -2, marginLeft:10 }}>
                <MaterialIcons
                  name="star-rate"
                  size={22}
                  color={"#FF881D"}
                  style={{ marginTop: -7 }}
                />
              </View>

              <View style={{ marginTop: -3 }}>
                <POText size={16} textColor={"#FF881D"}>
                  4,4
                </POText>
              </View>

            </View>
            <View style={{width:233,marginTop:5, borderBottomWidth:2, borderColor:'#FF881D'}} />

            <Avaliacoes
              autor={"Fulano"}
              avaliacao={4}
              descricao={
                "Achei muito bom! Mas infelizmente veio com pouca cobertura :/"
              }
            ></Avaliacoes>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}
