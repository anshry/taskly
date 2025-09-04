import { Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
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
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colors.grey : theme.colors.cerulean}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        hitSlop={20}
        onPress={!isCompleted ? handleDelete : undefined}
        activeOpacity={0.8}
      >
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colors.grey : theme.colors.red}
        />
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
    paddingHorizontal: 18,
    borderBottomColor: theme.colors.cerulean,
    borderBottomWidth: 1,
  },
  completedContainer: {
    backgroundColor: theme.colors.lightGrey,
    borderBottomColor: theme.colors.lightGrey,
  },
  itemText: { fontSize: 18, fontWeight: "200", marginLeft: 8, flex: 1 },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colors.grey,
    color: theme.colors.grey,
  },
  row: { flexDirection: "row", alignItems: "center", flex: 1 },
});
