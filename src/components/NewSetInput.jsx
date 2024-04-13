import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const NewSetInput = () => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const addSet = () => {
    console.warn("add set", reps, weight);

    

    setReps("");
    setWeight("");
  };

  return (
    <View style={styles.constanier}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="weight"
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

const styles = StyleSheet.create({
  constanier: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    flex: 1,
    borderRadius: 5,
    borderColor: "gainsboro",
  },
});

export default NewSetInput;
