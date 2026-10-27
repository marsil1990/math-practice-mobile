import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useState } from "react";

import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import styles from "./styles";

//Choose wich screen to show.

export default function App() {
  //track whether the quiz is open.
  const [started, setStarted] = useState(false);

  //Open the quiz screen.
  function startQuiz() {
    setStarted(true);
  }

  function goHome() {
    setStarted(false);
  }

  return (
    <View style={styles.container}>
      {/* Show one screen at a time */}
      {started ? (
        <QuizScreen goHome={goHome} />
      ) : (
        <HomeScreen onStart={startQuiz} />
      )}
    </View>
  );
}
