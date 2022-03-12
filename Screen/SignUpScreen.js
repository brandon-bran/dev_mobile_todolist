import {TokenContext, UsernameContext} from "../Context/Context";
import React, {useContext} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {signIn, signUp} from "../API/TodoAPI";

export default function SignUpScreen ({ navigation }) {
    const [error, setError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = useContext(TokenContext);
    const [username, setUsername] = useContext(UsernameContext);
    
    return (
        <View>
            <TextInput
                //style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder={"username"}
            />
            <TextInput
                //style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                placeholder="password"
            />
            <Button
                onPress={ () =>
                    signUp(username, password)
                        .then(token => {
                            setToken(token)
                            setUsername(username)
                            props.navigate('Home')
                        })
                        .catch(err => {
                            setError(err)
                        })
                }
                title="Sign Up"
            />
            {error != null ? <Text>{error}</Text> : <Text/>}
        </View>
    );
}
