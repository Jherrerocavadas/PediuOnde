import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function HeaderLogo() {
  return (

    <View style={styles.logoView}>
      <StatusBar style="auto" backgroundColor="orange"/>
      <Image style={styles.logo} source={require('../../assets/icon.png')}
      />
      {/*
      <TouchableOpacity>
        <View style={styles.userIcon}>
          <Image style={{
            width:80,
            height:80,
            borderRadius:40,
          }} source={require('../../assets/icon.png')}
          />
        </View>
      </TouchableOpacity>*/}
    </View>
  )
}

export function HeaderChat({empresa, assunto}) {
  return(
    <View style={styles.headerChat}>
    <View>
    <Text style={styles.headerChatText}> {empresa} </Text>
    <Text style={styles.headerChatSubText}> {assunto} </Text>
    </View>
    <TouchableOpacity>
      <Entypo name="dots-three-vertical" size={24} color="white" />
    </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  logoView: {
  //  backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width:300,
    height:300,
  },

  userIcon: {
    height:90,
    width:90,
    backgroundColor:"orange",
    borderRadius:45,
    alignItems: "center",
    justifyContent: "center",
  },

  headerChat:{//mudar esses valores para responsividade depois
    justifyContent:"center",
    justifySelf:"flex-start",
    alignItems:"center",

    flexDirection:"row",

    backgroundColor: "orange",

  },

  headerChatText:{
    color: "white",
    fontSize:30,
  },

  headerChatSubText:{
    color: "white",
    fontSize:20,
  },

});
