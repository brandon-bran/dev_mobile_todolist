import {Button, FlatList, View,Image,TouchableOpacity} from "react-native";
import {getTaskListsByUsername} from "../API/TodoAPI";
import {useContext, useEffect, useState} from "react";
import {TokenContext, UsernameContext} from "../Context/Context";
import Input from "./UI/Input";
import { deleteTaskLists } from "../API/TodoAPI";
export default function TodoLists ({ navigation, route }) {
    
    const [username, setUsername] = useContext(UsernameContext);
    const [token, setToken] = useContext(TokenContext);
    const [data, setData] = useState([]);
    console.log("la data ici "+JSON.stringify(data,null,2))
    useEffect( () => {getTaskListsByUsername(username, token).then(r => {setData(r.taskLists); console.log(r.taskLists)})}, []);
    
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => 
                <View style={{ flex: 1,
                    flexDirection: 'row',
                   
                     }}>
                         <View style={{flex:1}}> <Button title={item.title} 
                    
                    onPress={() => {navigation.navigate('todolist')}}/></View>
                   <TouchableOpacity
                   onPress={ () =>
                    deleteTaskLists(item.id,token)
                        
                }
                   >
                   <Image source={require('../assets/trash-can-outline.png')} style={{ height: 24, width: 24 }} />
                   </TouchableOpacity>
                   
                </View>
                }
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
