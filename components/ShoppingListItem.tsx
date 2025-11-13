import { Entypo, Feather } from "@expo/vector-icons";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It'll be gone forever",
      [
        {
          text: "Yes",
          onPress: () => {
            onDelete();
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
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
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
        <Feather
          name="trash"
          size={24}
          color={isCompleted ? theme.colors.grey : theme.colors.red}
        />
      </TouchableOpacity>
    </Pressable>
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
