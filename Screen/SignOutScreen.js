import {Button} from "react-native";
import {useContext} from "react";
import {TokenContext} from "../Context/Context";

export default function SignOutScreen ({ navigation, route }) {
    const [token, setToken] = useContext(TokenContext);
    return <Button title='Sign me out' onPress={() =>  {setToken(null); navigation.navigate('SignIn')}} />
}
