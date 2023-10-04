import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from '../../contexts/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { Login, user, loading } = useAuth();

    const submit = async () => {
        var data = { email, password };
        await Login(data, false);
    }

    useEffect(() => {
        if (!loading) {
            navigation.navigate("Register");
        }
    }, [loading])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ height: '30%', width: '100%', paddingTop: '40%', display: 'flex', alignItems: 'center' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 50 }}>My To-do List</Text>
                </View>
                <View style={{ height: '40%', width: '100%', gap: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: '10%', fontSize: 25 }}>Email</Text>
                    <TextInput value={email} onChangeText={(text) => { setEmail(text) }}
                        style={{ fontSize: 20, backgroundColor: '#fff', padding: 10, width: '80%', height: '18%', borderRadius: 10 }}
                    />
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: '10%', fontSize: 25 }}>Password</Text>
                    <TextInput secureTextEntry={true} value={password} onChangeText={(text) => { setPassword(text) }}
                        style={{ fontSize: 20, backgroundColor: '#fff', padding: 10, width: '80%', height: '18%', borderRadius: 10 }}
                    />
                    <Text style={{ alignSelf: 'flex-end', paddingRight: '10%', fontSize: 15 }}>Forgot password</Text>
                </View>
                <View style={{ paddingTop: '10%', width: '100%', height: '30%', display: 'flex', alignItems: 'center', gap: '8%', flexDirection: 'column' }}>
                    <Pressable onPress={() => submit()} style={{ backgroundColor: '#D7B439', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '20%', borderRadius: 10, }}><Text style={{ fontSize:30, color: '#fff' }}>Enter</Text></Pressable>
                    <Pressable onPress={() => { navigation.navigate("Register") }} style={{ backgroundColor: '#FCD34D', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '20%', borderRadius: 10 }}><Text style={{ fontSize:30, color: '#886D6D' }}>Register</Text></Pressable>
                </View>
            </SafeAreaView>
            <StatusBar style="light" /></>
    );
}

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

export default LoginScreen;