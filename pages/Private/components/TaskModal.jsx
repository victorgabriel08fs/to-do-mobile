import moment from "moment";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { api } from "../../../services/api";

const TaskModal = ({ task, modalVisible, setModalVisible }) => {
    const changeTask = async (id) => {
        await api.patch('tasks/' + id + '/change').then((res) => {
            setModalVisible(false);
        });
    }

    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>
                            {task.title}
                        </Text>
                        <Text style={styles.description}>{task.description}</Text>
                        <Text style={styles.date}>
                            {moment(task.createdAt).format('DD/MM/Y')}
                        </Text>
                    </View>
                    <View style={styles.modalFooter}>
                        <Pressable style={[styles.footerButton,{backgroundColor:'#4d4d4d'}]} onPress={() => { setModalVisible(false) }}><AntDesign color='#FFF' name='arrowleft' size={20} /></Pressable>
                        <Pressable style={[styles.footerButton,{backgroundColor:'#187c1d'}]} onPress={() => { changeTask(task.id) }}><AntDesign color='#000' name='check' size={20} /></Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalContent: {
        gap: 15,
    },
    modalFooter: {
        gap:10,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footerButton: {
        height:'50%',
        borderRadius:10,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width: '45%'
    },
    modalView: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
        height: '40%',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default TaskModal;
