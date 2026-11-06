import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useState } from "react";
import questions from "./data/questions";

import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import styles from "./styles";

// Choose wich screen to show

export default function App() {
  //track whether the quiz is open.
  const [started, setStarted] = useState(false);
  const [exercises, setExercises] = useState([]);

  const differentTopics = new Set();
  questions.forEach((element) => {
    differentTopics.add(element.topic);
  });
  const topics = [...differentTopics];

  // Select questions for the chosen topic and open the quiz.
  function startQuiz(topic) {
    setExercises(questions.filter((question) => question.topic === topic));
    setStarted(true);
  }

  // Return to the home screen.

  function goHome() {
    setStarted(false);
  }

  return (
    <View style={styles.container}>
      {/* Show one screen at a time */}
      {started ? (
        <QuizScreen goHome={goHome} questions={exercises} />
      ) : (
        <HomeScreen onStart={startQuiz} exercisesTopic={topics} />
      )}
    </View>
  );
}
