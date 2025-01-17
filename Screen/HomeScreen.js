import {Text} from "react-native";
import {useContext} from "react";
import {UsernameContext} from "../Context/Context";

export default function HomeScreen () {
    const [username, setUsername] = useContext(UsernameContext)
    return (
        <>
            <Text>Welcome !</Text>
            <Text>You are logged as {username}</Text>
        </>
    )
}
