import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import IMCScreen from "../screens/IMCScreen";
import { RegitroUsuarioScreen } from "../screens/RegitroUsuarioScreen";

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator initialRouteName="Welcome">
            <Tab.Screen 
                name="Welcome" 
                component={WelcomeScreen}
                options={{headerShown: false}}
                />
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="Calculadora" component={CalculadoraScreen}/>
            <Tab.Screen name="IMC" component={IMCScreen}/>
            <Tab.Screen name="Registro" component={RegitroUsuarioScreen}/>
        </Tab.Navigator>
    )
}

export default function NavegadorBottom(){
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    )
}