import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import POButtons from "../Components/POButtons";
import POText from "../Components/POText";
import {FooterClient} from "../Components/Footer"



export default function Login() {

  return (
    <View style={styles.container}>
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
      <FooterClient/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: 'center',
    justifyContent: 'center',
  },
});
