import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from "react-native-select-dropdown";

const HomeScreen = ({ navigation }) => {
    const countries = ["Egypt", "Canada", "Australia", "Ireland","Egypt", "Canada", "Australia", "Ireland","Egypt", "Canada", "Australia", "Ireland","Egypt", "Canada", "Australia", "Ireland"];

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ height: '30%', width: '100%', paddingTop: '20%', display: 'flex', alignItems: 'center' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 50 }}>My To-do List</Text>
                </View>
                <View style={{ height: '40%', width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Image source={require('../../assets/boneco.png')} style={{ width: '80%', height: '80%' }} />
                </View>
                <View style={{ width: '100%', height: '30%', display: 'flex', alignItems: 'center', gap: '8%', flexDirection: 'column' }}>
                    <Pressable onPress={() => { navigation.navigate("Register") }} style={{ backgroundColor: '#D7B439', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '20%', borderRadius: 10, color: '#fff' }}><Text style={{ fontSize: 30, }}>Register</Text></Pressable>
                    <Pressable onPress={() => { navigation.navigate("Login") }} style={{ backgroundColor: '#FCD34D', borderWidth: 1, borderColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '20%', borderRadius: 10 }}><Text style={{ fontSize: 30, }}>Login</Text></Pressable>
                </View>
            </SafeAreaView>
            <StatusBar style="light" /></>

    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FCD34D',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});