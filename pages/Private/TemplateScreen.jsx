import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const TemplateScreen = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>My To-Do List</Text>
            {children}
            <StatusBar style="auto" />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        overlayColor: '#e32012',
        paddingBottom: '20%',
        paddingTop: '20%',
        flex: 1,
        backgroundColor: '#fef3bd',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default TemplateScreen;