import { NavigationContainer } from "@react-navigation/native";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { useAuth } from "../contexts/auth";

const Routes = () => {
    const {signed} = useAuth();
    
    return (
        <NavigationContainer>
            {signed ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}

export default Routes;