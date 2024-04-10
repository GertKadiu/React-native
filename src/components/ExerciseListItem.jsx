import { StyleSheet, Text, View } from "react-native";


export default function ExerciseListItem({ item }) {
    return (
      <View style={styles.exerciseContanier}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseEquipment}>
          {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
        </Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    exerciseName: {
      fontSize: 20,
      fontWeight: "500",
    },
    exerciseEquipment: {
      color: "dimgray",
    },
    exerciseContanier: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      gap: 5,
    },
  });