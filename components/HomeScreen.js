import { Button, Text } from "react-native";
import styles from "../styles";

// Display the welcome message and let the user start the quiz.

export default function HomeScreen({ onStart, exercisesTopic }) {
  return (
    <>
      <Text style={styles.title}> Practice your math skills! </Text>
      {exercisesTopic.map((topic) => (
        <Button key={topic} title={topic} onPress={() => onStart(topic)} />
      ))}
    </>
  );
}
