import React from "react";
import { View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { POButton } from "../../Components/POButton";
import { POText } from "../../Components/POText";
import { POInputProduct } from "../../Components/POTextInput";
import SafeArea from "../../Components/SafeArea";

{/*---------- <Componentes personalizados> ----------*/}
/*import HeaderLogo from "../Components/Header";
import POButtons from "../Components/POButtons";
import POText from "../Components/POText";*/

export default function AddProduto() {

  return (
    <SafeArea>
      <ScrollView>

      <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
          <POText weight='Black' size={22}>Adicionar Produto</POText>            
        </View>

        <View style={{width:'100%', paddingHorizontal:20}}>
          <View style={{marginVertical:10}}>
            <POInputProduct title={'Título'}/>
          </View>
          <View style={{marginVertical:10}}>
            <POInputProduct title={'Preço'}/>
          </View>
          <View style={{marginVertical:10}}>
            <POInputProduct alignCenter="top" heightInput={130} borderRadiusInput={10} title={'Descrição'}/>
          </View>
            <POButton text={'Adicionar Produto'} BtnHeight={50} BtnWidth={'100%'} />

        </View>
      </ScrollView>
    </SafeArea>
  );
}
