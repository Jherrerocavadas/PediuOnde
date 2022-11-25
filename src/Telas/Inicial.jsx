import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import { POButton } from "../Components/POButton";
import { POTextLink } from "../Components/POText";

export default function App() {

  return (
    <View style={styles.container}>
      <HeaderLogo/>
      <View style={{height:120, justifyContent:'space-between'}}>
        <POButton styleBtn={'orange'} text={"Cadastre-se"}/>
        <POButton styleBtn={'white'} text={"Login"}/>        
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
