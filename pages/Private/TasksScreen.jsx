import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { api } from '../../services/api';
import { ScrollView } from 'react-native';
import moment from 'moment/moment';
import { useAuth } from '../../contexts/auth';
import SelectDropdown from 'react-native-select-dropdown'
import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import TemplateScreen from './TemplateScreen';
import TaskModal from './components/TaskModal';

const TasksScreen = ({ navigation, route }) => {
    const [tasks, setTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const { workspace } = route.params;
    const [tasksCount, setTasksCount] = useState(null);
    const { user, Logout } = useAuth();

    const getTasks = async () => {

        await api.get('tasks', {
            params: {
                take: 10000,
                workspaceId: workspace.id
            }
        }).then(async (res) => {
            setTasks(res.data.tasks);
            setTasksCount(res.data.count);
        });
    }



    useEffect(() => {
        getTasks();
    }, [tasks]);

    const changeTask = async (id) => {
        await api.patch('tasks/' + id + '/change');
    }

    const logout = async () => {
        await Logout();
        navigation.navigate("Home");
    }

    return (
        <TemplateScreen>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                <Pressable onPress={() => { navigation.goBack() }}><AntDesign name='arrowleft' size={25} /></Pressable>
                <Pressable onPress={() => { navigation.navigate("Settings") }}><AntDesign name='setting' size={25} /></Pressable>
            </View>
            <Text style={styles.pageTitle}>{workspace.title}</Text>
            <ScrollView style={{ height: '50%', paddingBottom: 0, width: 350 }}>
                {tasks.map((task) => (
                    <>
                        <Pressable onPress={() => { setModalVisible(true) }} key={task.id} style={styles.row}>
                            <View style={styles.col}>
                                <Text style={styles.title}>
                                    {task.title.length > 30 ? task.title.substring(0, 27) + '...' : task.title}
                                </Text>
                                <Text style={styles.description}>{task.description && task.description.length > 30 ? task.description.substring(0, 30) + '...' : task.description}</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={styles.date}>
                                    {moment(task.createdAt).format('DD/MM/Y')}
                                </Text>
                            </View>
                            <View style={styles.col}>
                                <Pressable onPress={() => { changeTask(task.id) }}>{task.status ? <AntDesign name='checksquare' size={15} /> : <AntDesign name='checksquareo' size={15} />}</Pressable>
                            </View>
                        </Pressable>
                        <TaskModal task={task} setModalVisible={setModalVisible} modalVisible={modalVisible} />
                    </>
                ))}

            </ScrollView>
        </TemplateScreen>
    );
}

const styles = StyleSheet.create({
    tasks: {
        padding: 10
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3
    },
    pageTitle: {
        fontWeight: '700',
        fontSize: 14,
        marginBottom: 15
    },
    description: {
        color: '#2e2e2e',
        fontSize: 12
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


export default TasksScreen;