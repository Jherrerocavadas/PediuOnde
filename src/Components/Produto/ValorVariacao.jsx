import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { POText } from '../POText'

export default function ValorVariacao({valor}){
    // function buttonSelectedOrNot(textColor)
    var bgColor = "#FF881D" //valores vão alternar ao pressionar o botão
    var poTextColor = "white" //valores vão alternar ao pressionar o botão

    const viewStyles = {
      paddingHorizontal:10,
      paddingVertical:10,
      borderRadius:30,
      backgroundColor:bgColor
    }
    return(
        <TouchableOpacity  onPress={ ()=>{} }>
          <View style={viewStyles}>
              <POText size={16} textColor={poTextColor}>{valor}</POText>
          </View>
        </TouchableOpacity>
    )
}
