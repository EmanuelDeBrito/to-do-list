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
        padding: 20,
        backgroundColor: '#DDD',
        borderRadius: 10
    },
    inputLabel: {
        color: '#000',
        fontSize: 17
    }
})