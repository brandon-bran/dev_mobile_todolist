import TodoLists from "../components/TodoLists";
import TodoList from "../components/TodoList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function TodoListsScreen ({ navigation, route }) {
    
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="todolists" component={TodoLists}/>
            <Stack.Screen name="todolist" component={TodoList}/>
        
        </Stack.Navigator>
    )
}
