import {Text, View, TouchableOpacity} from 'react-native';


export function POText({texto}) {
  return (
      <View>
        <Text style={{color:"white",}}> {texto} </Text>
      </View>
  );
}

export function POTextLink({texto, link}) {
  const styles = {
    container:
    {
      position: "relative",
      bottom:10,
      flexDirection: "row",
    },
    textStyle:{
      fontSize: 15,
    },

    textLink: {
      color:"orange",
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
