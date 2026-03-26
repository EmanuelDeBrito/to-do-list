import { View, Text, StyleSheet } from "react-native"

const Screen = () => {
    return(
        <View style={styles.cotainer}>
            <Text>Projeto TO-DO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Screen