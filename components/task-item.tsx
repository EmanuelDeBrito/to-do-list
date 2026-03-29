import { View, Text, Pressable, StyleSheet } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, FadeIn, FadeOut, Easing } from "react-native-reanimated"
import { TaskType } from "../types/task-type"

type Props = {
    id: number,
    taskName: string,
    done: boolean,
    onDone: (id: number) => void
}

export const TaskItem = ({ id, taskName, done, onDone }: Props) => {
    const elementScale = useSharedValue(1)
    const elementOpacity = useSharedValue(1)

    const animationStyles = useAnimatedStyle(() => ({
        opacity: elementOpacity.value,
        transform: [{ scale: elementScale.value }]
    }))

    const handleDone = () => {
        if(done === false){
            elementScale.value = withRepeat(
                withTiming(1.1, { duration: 200 }), 
                2, 
                true
            )
            elementOpacity.value = withTiming(0.4)
        }else{
            elementOpacity.value = withTiming(1)
        }
        onDone(id)
    }

    return(
        <Animated.View 
            style={[styles.container, animationStyles]}
            entering={FadeIn}
            exiting={FadeOut}
        >
            <View style={styles.left}>
                <Pressable
                    style={done ? styles.doneTaskButton : styles.undoneTaskButton}
                    onPress={handleDone}
                />
                <Text style={styles.taskNameText}>{taskName}</Text>
            </View>
            <Pressable>
                <Text style={styles.deleteTaskText}>Excluir</Text>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        marginHorizontal: 20,
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