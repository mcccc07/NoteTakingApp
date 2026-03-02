import React, { useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  // 1. Separate State for Title and Content
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  // State for the list of notes
  const [notes, setNotes] = useState<{ id: string; title: string; content: string }[]>([]);

  // 2. Updated function to add a note with Title and Content
  const addNote = () => {
    if (noteTitle.trim() === "" || noteContent.trim() === "") return; // Don't add if empty

    const newNote = {
      id: Date.now().toString(),
      title: noteTitle,
      content: noteContent,
    };

    setNotes([...notes, newNote]);

    // Clear both inputs
    setNoteTitle("");
    setNoteContent("");
    setModalVisible(false);
  };

  // 3. Updated render to show Title and Content
  const renderNoteItem = ({
    item,
  }: {
    item: { id: string; title: string; content: string };
  }) => (
    <View style={styles.noteItem}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Class Notes</Text>
        <Text style={styles.headerSubtitle}>Notebook</Text>
      </View>

      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item) => item.id}
        style={styles.content}
      />

      {/* Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalLabel}>New Note</Text>

            <View style={{ width: "100%" }}>
              <Text style={styles.inputLabel}>Title</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Math Homework"
                value={noteTitle} // Uses noteTitle
                onChangeText={setNoteTitle}
              />

              <Text style={styles.inputLabel}>Content</Text>
              <TextInput
                style={[styles.inputField, styles.contentInput]}
                placeholder="Type your note..."
                value={noteContent} // Uses noteContent
                onChangeText={setNoteContent}
                multiline={true} // Makes it a big box
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={addNote}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    height: 130,
    backgroundColor: "#1f1d4c",
    padding: 20,
    justifyContent: "center",
  },
  headerTitle: { color: "#fff", fontSize: 18 },
  headerSubtitle: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  content: { flex: 1, padding: 20 },

  // Note Items
  noteItem: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f1d4c",
    marginBottom: 5,
  },
  noteContent: { fontSize: 14, color: "#333" },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },
  modalLabel: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 14,
    color: "#555",
  },
  inputField: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  contentInput: { height: 80, textAlignVertical: "top" }, // Taller box for content
  modalButtons: { flexDirection: "row", gap: 10 },
  modalButton: { padding: 15, borderRadius: 10, flex: 1, alignItems: "center" },
  saveButton: { backgroundColor: "#7977aa" },
  cancelButton: { backgroundColor: "#ff4444" },
  buttonText: { color: "white", fontWeight: "bold" },

  // Button styles
  addButton: {
    backgroundColor: "#1f1d4c",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
