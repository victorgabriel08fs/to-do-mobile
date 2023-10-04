import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Public/HomeScreen';
import LoginScreen from '../pages/Public/LoginScreen';
import RegisterScreen from '../pages/Public/RegisterScreen';
const Stack = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default PublicRoutes;