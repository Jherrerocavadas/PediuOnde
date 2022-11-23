import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import POButtons from "../Components/POButtons";
import POText from "../Components/POText";




export default function Login() {

  return (
    <View>
    <Text> LOGIN BALA </Text>
      <View>
        <Image style={{
          width:80,
          height:80,
          borderRadius:40,
        }} source={{
          uri: "https://github.com/Jherrerocavadas.png"
        }}
        />
      </View>
    </View>
  );
}
