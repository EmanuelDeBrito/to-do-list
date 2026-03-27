import { SafeAreaView, View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { useState } from "react"

const Screen = () => {
    const [task, setTask] = useState("")

    const handleAddTask = () => {

    }

    return(
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#FFF' }} />
                
            <View style={styles.cotainer}>
                <StatusBar
                    style={"dark"}
                    translucent={false}
                    backgroundColor="red"
                />
                <View style={styles.formArea}>
                    <Input 
                        placeholder="Digite sua tarefa..."
                        value={task}
                        onChangeText={setTask}
                    />
                    <Button 
                        label="Add"
                        onPress={handleAddTask}
                    />
                </View>
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    cotainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF'
    },
    formArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15
    }
})

export default Screen