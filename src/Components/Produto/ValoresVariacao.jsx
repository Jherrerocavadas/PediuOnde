import React from 'react'
import {View, FlatList} from 'react-native'
import ValorVariacao from "./ValorVariacao"


export default function ValoresVariacao({valores}){

    const viewStyles = {
      borderWidth:2,
      borderColor:'#FF881D',
      flexDirection:'row',
      borderRadius:30,
      marginHorizontal:20,
      overflow:'hidden'
    }

    return(
      <View style={viewStyles}>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={'fast'}
            data={valores}
            keyExtractor={valorVariacao => valorVariacao._id}
            renderItem={({item : valorVariacao}) => (
                  <ValorVariacao valor={valorVariacao.valor}/>
              )}
           />
       </View>


    )
}
