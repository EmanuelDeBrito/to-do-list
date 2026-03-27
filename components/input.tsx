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
            onChangeText={t => onChangeText(t)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        padding: 20,
        backgroundColor: '#DDD',
        fontSize: 17,
        borderRadius: 10
    }
})