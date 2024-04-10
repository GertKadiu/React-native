import { StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContanier}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseEquipment}>
        <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
        <Text style={styles.subValue}>{item.equipment}</Text>
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
    marginHorizontal: 2,
    shadowColor:"#000",
    shadowOffsetL:{
        width: 0,
        heigh:1
    },
    shadowOpacity:0.2,
    shadowRadius:1.41,
    elevation: 2,
  },
  subValue: {
    textTransform: "capitalize",
  },
});
