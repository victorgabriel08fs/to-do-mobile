import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from '../pages/Private/TasksScreen';
import SettingsScreen from '../pages/Private/SettingsScreen';
import WorkspacesScreen from '../pages/Private/WorkspacesScreen';
import { useEffect } from 'react';
const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Workspaces" component={WorkspacesScreen} />
            <Stack.Screen name="Tasks" component={TasksScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

export default PrivateRoutes;