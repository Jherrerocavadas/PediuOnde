import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import { POButton } from "../Components/POButton";
import { POTextLink } from "../Components/POText";

export default function App() {

  return (
    <View style={styles.container}>
      <HeaderLogo/>
      <View style={{height:120, justifyContent:'space-between', width:'100%', paddingHorizontal:20}}>
        <POButton styleBtn={'orange'} text={"Cadastre-se"} BtnHeight={50} BtnWidth={'40%'}/>
        <POButton styleBtn={'white'} text={"Login"} BtnHeight={50} BtnWidth={'40%'}/>        
      </View>

      
      <POTextLink texto="É um vendedor?" link="Clique Aqui!"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
