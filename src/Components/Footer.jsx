import {useState} from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { FontAwesome5 } from '@expo/vector-icons';
import { YourMessages } from "./POMessages";

export function FooterClient() {
  return (

    <View style={styles.footerclient}>
      <TouchableOpacity style={styles.icon}>
        <View>
          <FontAwesome5 name="receipt" size={36} color="orange" />
          <Text> Compras </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
          <Ionicons name="ios-home-outline" size={36} color="orange" />
          <Text> Início </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="account-circle" size={36} color="orange" />
        <Text> Conta </Text>
      </TouchableOpacity>


    </View>
  )
}

export function FooterVendor() {
  return (
    <View style={styles.footervendor}>
      <TouchableOpacity style={styles.icon}>

        <Ionicons name="home" size={36} color="orange" />
        <Text> Início </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="plus" size={36} color="orange" />
        <Text> Adicionar Produto </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon}>
        <MaterialIcons name="account-circle" size={36} color="orange" />
        <Text> Conta </Text>
      </TouchableOpacity>
    </View>
  );
};

export function FooterChat({functionSetState, variableSetState}) {
  const[texto, setTexto] = useState("")
  return(
    <View style={{paddingHorizontal:10}}>
      <View style={styles.msgBoxContainer}>
        <TextInput
        style={styles.writeMsgBox}
          onChangeText={setTexto}
          value={texto}
          placeholder= "Escreva uma mensagem"
          keyboardType="text"
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Feather name="paperclip" size={30} color="#FF881D" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
              functionSetState( (arr)=>[...variableSetState, 
              <YourMessages texto={texto}/>] )
            
              setTexto('')
              console.log(functionSetState)
          }}>
            <MaterialCommunityIcons name="send-circle" size={48} color="#FF881D" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}




const styles = StyleSheet.create({
  userIcon: {
    height:90,
    width:90,
    backgroundColor:"orange",
    borderRadius:45,
    alignItems: "center",
    justifyContent: "center",
  },

  footerclient:{

    flexDirection:"row",
    backgroundColor:"white",
    paddingLeft:15,
    paddingRight:15,
    alignContent:"center",
    justifyContent:"center",
    elevation:5,
    shadowColor: "black",
  },

  footervendor:{

    flexDirection:"row",
    backgroundColor:"white",
    paddingLeft:15,
    paddingRight:15,
    justifyContent:"space-between",
    elevation:5,
    shadowColor: "black",
  },

  icon: {
    margin:15,
    alignItems:"center",
    justifyItens:"center",
  },




//Tem que acertar esses estilos legalzinho ainda
  msgBoxContainer:{
    width:'100%',
    paddingLeft:15,
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:50,
    borderWidth:2,
    borderColor:"#FF881D",


  },
  writeMsgBox:{
    width:'70%',
    justifyItens:"flex-end",
  },

  iconsContainer:{
    width:'30%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",


  },
});
