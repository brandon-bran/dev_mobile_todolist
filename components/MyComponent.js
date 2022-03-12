import React from "react";
import { Button, Text } from "react-native";

export default function MyComponent(props) {
  return (
    <>
      <Text>Fils : le bouton a été pressé {props.count} fois</Text>
      <Button title='Press me' onPress={props.onPressed} />
    </>
  )
}
