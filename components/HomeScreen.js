import { Button, Text } from "react-native";

//Display the welcome message and let the user start the quiz.

export default function HomeScreen({ onStart }) {
  return (
    <>
      <Text> Practice your math skills! </Text>
      <Button title="Start quiz" onPress={onStart} />
    </>
  );
}
