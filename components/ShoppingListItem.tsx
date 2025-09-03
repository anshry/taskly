import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It'll be gone forever",
      [
        {
          text: "Yes",
          onPress: () => {
            console.log("pressed");
          },
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        onPress={!isCompleted ? handleDelete : undefined}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: "#1a759f",
    borderBottomWidth: 1,
  },
  completedContainer: {
    backgroundColor: theme.colors.lightGrey,
    borderBottomColor: theme.colors.lightGrey,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colors.grey,
    color: theme.colors.grey,
  },
  button: { backgroundColor: theme.colors.black, padding: 8, borderRadius: 6 },
  completedButton: { backgroundColor: theme.colors.grey },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
