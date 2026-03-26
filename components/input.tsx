import { TextInput, StyleSheet } from "react-native"

type Props = {
    placeholder: string,
    value: string,
    onChangeText: (newValue: string) => void
}

export const Input = ({ placeholder, value, onChangeText }: Props) => {
    return(
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={"#777"}
            value={value}
            onChangeText={onChangeText}
        />
    )
}

const styles = StyleSheet.create({
    input:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#AAA',
        borderRadius: 10
    }
})