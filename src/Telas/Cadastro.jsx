import React, {useState, useContext} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import {POButton}  from "../Components/POButton";
import { POInputCadastro } from "../Components/POTextInput";
import {POTextLink} from "../Components/POText";
import { useNavigation } from "@react-navigation/native";



export default function Cadastro() {
  const navigation = useNavigation()
  const [nome, setNome] = useState("");
  const [email,setEmail] = useState("");
  const [cpf,setCpf] = useState("");
  const [senha,setSenha] = useState("");
  const [repetirSenha,setRepetirSenha] = useState("");

  return (
    <View style={styles.container}>
      <HeaderLogo/>
      <View style={{width:'100%', paddingHorizontal:20}}>


      <POInputCadastro
        setter={setNome}
        valor={nome}
        placeholderText="Nome"
        tipoInput="text"/>


      <POInputCadastro
        setter={setEmail}
        valor={email}
        placeholderText="Email"
        tipoInput="email-address"

      />

      <POInputCadastro
        setter={setCpf}
        valor={cpf}
        placeholderText="CPF"
        tipoInput="numeric"
        maxInput = {11}
      />

      <POInputCadastro
        setter={setSenha}
        valor={senha}
        placeholderText="Senha"
        tipoInput="text"
        isTextoSeguro={true}
      />

      <POInputCadastro
        setter={setRepetirSenha}
        valor={repetirSenha}
        placeholderText="Repita a senha"
        tipoInput="text"
        isTextoSeguro={true}
      />

      <TouchableOpacity  style={{
        marginVertical:15, width:'100%', alignItems:'center', justifyContent:'center'}} 
        onPress={()=>{ navigation.navigate('Login', {emailLogin:email, senhaLogin:senha}) }}>
        <POButton BtnHeight={50} BtnWidth={'80%'} styleBtn={"orange"} text={"Login"}/>
      </TouchableOpacity>

      <POTextLink texto="Quer se cadastrar como vendedor?" link="Clique aqui!"/>
      </View>
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
