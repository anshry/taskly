import { StyleSheet, View } from "react-native";

import { ShoppingListItem } from "./components/ShoppingListItem";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: "#1a759f",
    borderBottomWidth: 1,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: { backgroundColor: theme.colors.black, padding: 8, borderRadius: 6 },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
