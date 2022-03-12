import {Button, FlatList, View} from "react-native";
import {getTaskListsByUsername} from "../API/TodoAPI";
import {useContext, useEffect, useState} from "react";
import {TokenContext, UsernameContext} from "../Context/Context";
import Input from "./UI/Input";

export default function TodoLists ({ navigation, route }) {
    
    const [username, setUsername] = useContext(UsernameContext);
    const [token, setToken] = useContext(TokenContext);
    const [data, setData] = useState([]);
    
    useEffect( () => {getTaskListsByUsername(username, token).then(r => {setData(r.taskLists); console.log(r.taskLists)})}, []);
    
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <Button title={item.title} onPress={() => {navigation.navigate('todolist')}}/>}
            />
            <Input/>
        </View>
    )
    
    
}

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom : 20
    },
});*/
