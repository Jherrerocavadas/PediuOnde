import React from 'react'
import { View, ScrollView, Text} from 'react-native'

export default function HorizontalScroll({ scrollTitleBottomSpace = 10, scrollTitle, children }){
    
    const scrollStyle = {
        width:'100%'
    }

    return(
        <View style={scrollStyle}>
        <Text style={{fontFamily:'PoppinsBold', fontSize:18, marginBottom:scrollTitleBottomSpace, marginLeft:20}}>{scrollTitle}</Text>
            <ScrollView horizontal={true} 
                        showsHorizontalScrollIndicator={false} 
                        decelerationRate={'fast'}>
                { children }
            </ScrollView>
        </View>
    )
}