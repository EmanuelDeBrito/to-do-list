import { TouchableOpacity, Text, StyleSheet } from "react-native"

type Props = {
    label: string,
    onPress: () => void
}

export const Button = ({ label, onPress }: Props) => {
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.inputLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#AAA',
        borderRadius: 10
    },
    inputLabel: {
        color: '#000',
        fontSize: 17,
        fontWeight: '500'
    }
})