import View from "react-native";
import TodoList from "../components/TodoList";

export default function ListScreen ({ navigation, route }) {
    return(
        <View>
            <TodoList/>
        </View>
    )
}
