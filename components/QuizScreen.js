import styles from "../styles";
import { Button, TextInput, Text } from "react-native";
import { useState } from "react";

// Display one question and manage the user's answer and feedback.

export default function QuizScreen({ goHome, questions }) {
  //Store the input and the message shown after checking it.
  const [answer, setAnswer] = useState("");
  const [exercise, setExercise] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  // Validate the input and check the current question's answer.
  function checkAnswer() {
    const text = answer.trim();
    // Stop checking answers after the quiz has finished.
    if (exercise >= questions.length) {
      return;
    }
    // Check for an empty input before converting it to a number.

    if (text === "") {
      setFeedback("Please enter an answer");
      return;
    }

    const number = Number(text);

    if (!Number.isFinite(number)) {
      setFeedback("Please enter a valid number");
      return;
    }

    if (number === questions[exercise].answer) {
      setScore((currentScore) => currentScore + 1);
    }

    changeExercise();
  }

  // Save the input and clear previous validation messages.

  function updateAnswer(text) {
    setAnswer(text);
    setFeedback("");
  }

  // Move to the next question and clear the previous input.

  function changeExercise() {
    setExercise((currentExercise) => currentExercise + 1);
    setAnswer("");
    setFeedback("");
  }

  // Restart the current topic and reset all quiz values.
  function restartQuiz() {
    setExercise(0);
    setAnswer("");
    setFeedback("");
    setScore(0);
  }

  return (
    <>
      {/*display the question and collect the answer */}
      {questions[exercise] ? (
        <Text style={styles.question}>{questions[exercise].question}</Text>
      ) : (
        <Text style={styles.question}>You have finished the quiz</Text>
      )}
      {exercise < questions.length ? (
        <Text>
          Question {exercise + 1} of {questions.length}
        </Text>
      ) : (
        <Text>
          Question {exercise} of {questions.length}
        </Text>
      )}

      {exercise < questions.length && (
        <>
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={updateAnswer}
            placeholder="Your answer"
            accessibilityLabel="Your answer"
            keyboardType="numeric"
            onSubmitEditing={checkAnswer}
          />

          <Button title="Check answer" onPress={checkAnswer} />
        </>
      )}
      {/*Show the result or a validation message.*/}

      {exercise >= questions.length ? (
        <>
          <Text style={styles.feedback} accessibilityLiveRegion="polite">
            Your score is {score}/{questions.length}
          </Text>

          {/* Give feedback based on the final score. */}
          <Text style={styles.feedback}>
            {score === questions.length
              ? "Excellent! You answered every question correctly!"
              : "You made some mistakes. Would you like to try again?"}
          </Text>

          <Button title="Try again" onPress={restartQuiz} />
        </>
      ) : (
        <Text style={styles.feedback} accessibilityLiveRegion="polite">
          {feedback}
        </Text>
      )}

      <Button title="Back to home" onPress={goHome} />
    </>
  );
}
