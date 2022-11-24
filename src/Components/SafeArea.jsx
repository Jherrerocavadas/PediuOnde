import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

export default function SafeArea({children}) {

    return(
        <SafeAreaView style={styles}>
            {children}
        </SafeAreaView>
    )
}