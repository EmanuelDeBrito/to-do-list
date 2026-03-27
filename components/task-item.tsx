import { View, Text, Pressable, StyleSheet } from "react-native"
import { TaskType } from "../types/task-type"

type Props = TaskType

export const TaskItem = ({ id, taskName, done }: Props) => {
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Pressable
                    style={done ? styles.doneTaskButton : styles.undoneTaskButton}
                />
                <Text style={styles.taskNameText}>{taskName}</Text>
            </View>
            <Pressable>
                <Text style={styles.deleteTaskText}>Excluir</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        marginBottom: 20,
        backgroundColor: '#DDD',
        borderRadius: 10
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    undoneTaskButton: {
        width: 30,
        height: 30,
        backgroundColor: '#FFF',
        borderRadius: '50%'
    },
    doneTaskButton: {
        width: 30,
        height: 30,
        backgroundColor: '#000',
        borderRadius: '50%'
    },
    taskNameText: {
        color: '#000',
        fontSize: 18
    },
    deleteTaskText: {
        color: '#F00',
        fontSize: 15,
        fontWeight: '700'
    }
})