import {Text, View, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';

export function POText({
    weight='Regular',
    size=20,
    textColor='black',
    children
    }) {

    const [fontsLoaded] = useFonts({
      PoppinsLight: require('../../assets/fonts/Poppins-Light.ttf'),
      PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
      PoppinsSemiBold: require('../../assets/fonts/Poppins-SemiBold.ttf'),
      PoppinsBold: require('../../assets/fonts/Poppins-Medium.ttf'),
      PoppinsBlack: require('../../assets/fonts/Poppins-Bold.ttf'),
    })

    const styleText = {
      fontFamily:`Poppins${weight}`, 
      fontSize:size, 
      color:textColor
    }
  
  return (
    <Text style={styleText}>{children}</Text>
  );
}

export function POTextLink({texto, link}) {
  const styles = {
    container:
    {
      position: "relative",
      bottom:10,
      flexDirection: "row",
      marginVertical:20
    },
    textStyle:{
      fontSize: 15,
    },

    textLink: {
      color:"#FF881D",
    },
  };

  return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>{texto} </Text>
      <TouchableOpacity>
          <Text style={[styles.textStyle, styles.textLink]}>{link}</Text>
      </TouchableOpacity>
      </View>
  );
}
