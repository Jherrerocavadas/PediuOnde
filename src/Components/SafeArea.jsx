import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = {
    backgroundColor:'white',
    flex:1
}

export default function SafeArea({children}) {

    return(
        <SafeAreaView style={styles}>
            {children}
        </SafeAreaView>
    )
}