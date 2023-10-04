import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { api } from "../../services/api";
import AntDesign from '@expo/vector-icons/AntDesign';
import moment from "moment";
import TemplateScreen from "./TemplateScreen";

const WorkspacesScreen = ({ navigation }) => {
    const [workspaces, setWorkspaces] = useState([]);
    const [workspacesCount, setWorkspacesCount] = useState(null);
    const { user, Logout } = useAuth();

    const getWorkspaces = async () => {
        await api.get('workspaces', {
            params: {
                userId: user.id
            }
        }).then(async (res) => {
            setWorkspaces(res.data.workspaces);
            setWorkspacesCount(res.data.count);
        });
    }

    useEffect(() => {
        getWorkspaces();
    }, [workspaces]);

    return (
        <TemplateScreen>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 25 }}>
                <Pressable onPress={() => { navigation.navigate("Settings") }}><AntDesign name='setting' size={25} /></Pressable>
            </View>
            <Text style={styles.pageTitle}>{user.name.split(' ')[0] + "'s workspaces"}</Text>
            <ScrollView style={{ height: '50%', paddingVertical: 30, width: 350 }}>
                {workspaces.map((workspace) => (
                    <Pressable key={workspace.id} style={styles.row} onPress={() => { navigation.navigate("Tasks", { workspace: workspace }) }}>
                        <View style={styles.col}>
                            <Text style={styles.title}>
                                {workspace.title.length > 30 ? workspace.title.substring(0, 27) + '...' : workspace.title}
                            </Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.date}>
                                {moment(workspace.createdAt).format('DD/MM/Y')}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </TemplateScreen>
    );
}
const styles = StyleSheet.create({
    workspaces: {
        padding: 10
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    pageTitle: {
        fontWeight: '700',
        fontSize: 14
    },
    description: {
        color: '#e11231',
        fontSize: 7
    },
    date: {
        color: '#000',
        fontWeight: '600',
        fontSize: 12
    },
    row: {
        height: '60%',
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 10,
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

export default WorkspacesScreen;