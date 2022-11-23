import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import POButtons from "../Components/POButtons";
import {POTextLink} from "../Components/POText";

export default function App() {

  return (
    <View style={styles.container}>
      <HeaderLogo/>
      <POButtons cor="orange" texto="Cadastre-se"/>
      <POButtons cor="white" texto="Login" textColor="black"/>
      
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

  loginbuttons: {
    height:50,
    width:225,
    backgroundColor:"orange",
    borderRadius:30,
    alignItems: "center",
    justifyContent: "center",
  },


});
