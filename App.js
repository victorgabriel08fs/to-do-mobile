import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { api } from './services/api';
import { ScrollView } from 'react-native-web';

export default function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    await api.get('users').then((res) => {
      setUsers(res.data);
    })
  }
  useEffect(() => {
    getUsers();
  }, [users]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {users.map((user) => (<Text style={styles.text}>
          {user.name}
        </Text>))}
      </ScrollView>
      <Text>Thiago cu sujo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: '#e32012',
    fontWeight: 'bold',
    borderRadius: '5px',
    padding: '5px',
    fontSize:'35px'
  }
});
