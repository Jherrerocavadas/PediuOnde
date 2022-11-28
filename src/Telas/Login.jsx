import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import { POButton } from "../Components/POButton";
import {POInputProduct, POInputCadastro} from "../Components/POTextInput";
import { POTextLink } from "../Components/POText";
import { useNavigation } from "@react-navigation/native";

export default function Login({ route }) {
const navigation = useNavigation()
  const [nome, setNome] = useState("");
  const [email,setEmail] = useState("");
  const [cpf,setCpf] = useState("");
  const [senha,setSenha] = useState("");
  const [repetirSenha,setRepetirSenha] = useState("");

  return (
    <View style={ styles.container }>
      <HeaderLogo/>

      <POInputCadastro
        setter={ setEmail }
        valor={ email }
        placeholderText="Email"
        tipoInput="email-address"

      />

      <POInputCadastro
        setter={ setSenha }
        valor={ senha }
        placeholderText="Senha"
        tipoInput="text"
        isTextoSeguro={ true }
      />

        <TouchableOpacity  style={{marginVertical:15, width:'100%', alignItems:'center', justifyContent:'center'}} onPress={()=>{ 
          if(senha === route.params?.senhaLogin && email === route.params?.emailLogin){
            navigation.navigate('AnalyticsVendor') 
          }
          else(
            alert('Login Inválido')
          )
          }}>
            <POButton styleBtn={ "orange" } BtnWidth={'80%'} BtnHeight={50} text ={"Login"}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ navigation.navigate('Cadastro') }}>
          <POTextLink texto="Não tem uma conta?" link="Clique aqui!" navigation={navigation} destiny={'Cadastro'}/>
        </TouchableOpacity>

      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20
  },
});
