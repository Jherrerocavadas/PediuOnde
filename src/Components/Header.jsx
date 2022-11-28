import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function HeaderLogo() {
  return (

    <View style={styles.logoView}>
      <StatusBar style="auto" backgroundColor="orange"/>
      <Image style={styles.logo} source={require('../../assets/icon.png')}
      />
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

const {windowWd, windowHt} = Dimensions.get('screen')

const styles = StyleSheet.create({
  logoView: {
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
    backgroundColor:"#FF881D",
    borderRadius:45,
    alignItems: "center",
    justifyContent: "center",
  },

  headerChat:{//mudar esses valores para responsividade depois
    width: windowWd,
    paddingHorizontal: 20,
    paddingVertical:10,
    justifyContent:"space-between",
    alignItems:'center',

    flexDirection:"row",

    backgroundColor: "#FF881D",

  },

  headerChatText:{
    color: "white",
    fontSize:20,
  },

  headerChatSubText:{
    color: "white",
    fontSize:15,
  },

});