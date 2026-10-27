import { StyleSheet } from "react-native";

// Define shared styles for the app's layout and UI elements.
const styles = StyleSheet.create({
  // Center the content and add space between elements.
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 24,
  },

  // Make the app title larger and bold.
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  // Make the question easy to read.
  question: {
    fontSize: 22,
  },

  // Add a visible border and limit the answer field's width.
  input: {
    width: "100%",
    maxWidth: 300,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    padding: 12,
    fontSize: 20,
    textAlign: "center",
  },

  // Reserve space for feedback to reduce layout movement.
  feedback: {
    fontSize: 18,
    textAlign: "center",
    minHeight: 24,
  },
});

// Allow other files to import these styles.
export default styles;
