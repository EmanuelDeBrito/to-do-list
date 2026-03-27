import { SafeAreaView, View, FlatList, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { useState } from "react"
import { TaskType } from "../types/task-type"
import { TaskItem } from "../components/task-item"

const Screen = () => {
    const [tasksList, setTaksList] = useState<TaskType[]>([])
    const [task, setTask] = useState("")

    const handleAddTask = (taskName: string) => {
        if(taskName){
            setTaksList([...tasksList, { id: tasksList.length + 1, taskName, done: false }])
            setTask('')
        }
    }

    return(
        <>
            <SafeAreaView style={styles.statusBar} />
                
            <View style={styles.container}>
                <StatusBar
                    style={"dark"}
                    translucent={false}
                    backgroundColor="#FFF"
                />
                <View style={styles.formArea}>
                    <Input 
                        placeholder="Digite sua tarefa..."
                        value={task}
                        onChangeText={setTask}
                    />
                    <Button 
                        label="Add"
                        onPress={() => handleAddTask(task)}
                    />
                </View>
                <FlatList
                    data={tasksList}
                    renderItem={({ item }) => (
                        <TaskItem 
                            id={item.id}
                            taskName={item.taskName}
                            done={item.done}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        flex: 0,
        backgroundColor: '#FFF'
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF'
    },
    formArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
        marginBottom: 20
    }
})

export default Screen