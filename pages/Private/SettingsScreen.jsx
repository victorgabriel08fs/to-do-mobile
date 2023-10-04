import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { api } from "../../services/api";
import AntDesign from '@expo/vector-icons/AntDesign';
import TemplateScreen from "./TemplateScreen";

const SettingsScreen = ({ navigation }) => {
    const { user, Logout } = useAuth();

    const logout = async () => {
        await Logout();
        navigation.navigate("Home");
    }

    return (
        <TemplateScreen>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 25 }}>
                <Pressable onPress={() => { navigation.goBack() }}><AntDesign name='arrowleft' size={25} /></Pressable>
            </View>
            <Text>Settings</Text>
            <ScrollView style={{ height: '50%', paddingVertical: 30, width: 350 }}>
                <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', gap: '8%', flexDirection: 'column' }}>
                    <Pressable onPress={() => { logout() }} style={{ backgroundColor: '#D7B439', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '100%', borderRadius: 10, color: '#fff' }}><Text style={{ fontSize: 25, }}>Logout</Text></Pressable>
                </View>
            </ScrollView>
        </TemplateScreen>
    );
}
const styles = StyleSheet.create({
    title: {
        color: '#e32012',
        fontWeight: 'bold',
        fontSize: 10
    },
    description: {
        color: '#e11231',
        fontSize: 7
    },
    date: {
        color: '#e32012',
        fontWeight: 'bold',
        fontSize: 8
    },
    row: {
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 6,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10,
        gap: 4,
        display: 'flex',
        flexDirection: 'row'
    },
    col: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});

export default SettingsScreen;