import styles from "../styles";
import { Button, TextInput, Text } from "react-native";
import { useState } from "react";

//Display one question and manage the user's answer and feedback.

export default function QuizScreen({ goHome }) {
  //Store the input and the message shown after checking it.
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  //Validate the input and check the answer to 5 + 3.
  function checkAnswer() {
    const text = answer.trim();

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

    if (number === 8) {
      setFeedback("Correct! Well done!");
    } else {
      setFeedback("Not quite. Try again!");
    }
  }

  function updateAnswer(text) {
    setAnswer(text);
    setFeedback("");
  }

  return (
    <>
      {/*display the question and collect the answer */}
      <Text style={styles.question}>What is 5 + 3?</Text>
      <TextInput
        styles={styles.input}
        value={answer}
        onChangeText={updateAnswer}
        placeholder="Your answer"
        accessibilityLabel="Your answer"
        KeyboardType="numeric"
        onSubmitEditing={checkAnswer}
      />
      <Button title="Check answer" onPress={checkAnswer} />
      {/*Show the result or a validation message.*/}
      <Text style={styles.feedback} accessibilityliveRegion="polite">
        {feedback}
      </Text>
      <Button title="Back to home" onPress={goHome} />
    </>
  );
}
