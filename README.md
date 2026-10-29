# Overview

I created Math Practice to learn how to build a mobile app with React Native and Expo. My goal was to practice using components, props, state, user input, and separate files to organize my code.

Math Practice is a quiz app with two topics: arithmetic and linear equations. To use the app, choose a topic on the home screen. Enter a numerical answer for each question and press **Check answer**. Each valid answer moves to the next question. Empty or invalid answers show an error message without moving forward.

Each topic has five questions. At the end, the app shows the score and a message based on the result. Press **Try again** to restart the same topic, or **Back to home** to choose a topic.

As a mathematics teacher, I wanted to connect my teaching experience with software development. This project helped me learn how to build an interactive app and update the screen when the user takes an action.

# Development Environment

I developed the app on Windows using Visual Studio Code and Node.js. I used npm to install packages and Expo CLI to run the project. I used Expo Go to test the app on my iPhone, and Git and GitHub to manage and publish the code.

The app is written in JavaScript and JSX. It uses React and its `useState` hook to manage the current screen, answers, question index, feedback, and score. React Native provides components such as `View`, `Text`, `TextInput`, and `Button`. I used `StyleSheet` to define the styles in a separate file.

To run the project:

1. Install Node.js LTS and download or clone this repository.
2. Open a terminal in the project folder and run:

   ```bash
   npm install
   npx expo start
   ```

3. Install Expo Go on your phone. Use an Expo Go version that supports the project's Expo SDK.
4. Sign in to Expo CLI and Expo Go with the same Expo account if prompted.
5. Connect the phone and computer to the same Wi-Fi network. On an iPhone, scan the QR code with the Camera app and open the project in Expo Go.

# Useful Websites

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React useState Documentation](https://react.dev/reference/react/useState)
- [React Props Documentation](https://react.dev/learn/passing-props-to-a-component)
- [Expo Documentation](https://docs.expo.dev/)
- [JavaScript Array filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [JavaScript Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

# Future Work

- Add more topics, questions, and difficulty levels.
- Show a review of incorrect answers with explanations after the quiz.
- Save quiz results on the device so users can track their progress.
- Improve the layout for small screens and when the keyboard is open.
- Test the app on Android and improve support for screen readers.
