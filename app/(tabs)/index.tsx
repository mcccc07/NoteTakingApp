import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Class Note</Text>
        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerSubtitle}>Welcome Back! </Text>
        </View>
      </View>

      {/*Content*/}
      <View style={styles.content}>
        <Text style={styles.contentText}>Here are your notes:</Text>
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity>
          <Text style={styles.addButtonText}>Add new note</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 180,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#1f1d4c",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
  },
  headerSubtitleContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 24,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#7977aa",
    padding: 16,
    alignItems: "center",
    margin: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
