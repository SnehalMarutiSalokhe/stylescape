import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from "react-native";

export default function AccountScreen() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>STYLESCAPE</Text>
        <View style={styles.headerIcons}></View>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatar} />
        <Text style={styles.greeting}>Hello, Mam</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Your Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Your Lists</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownToggle}>
        <Image
          source={require("../assets/arrowback.png")}
          style={[
            styles.backArrow,
            { transform: [{ rotate: isDropdownVisible ? "90deg" : "270deg" }] },
          ]} // Rotating the arrow based on dropdown visibility
        />
      </TouchableOpacity>

      {isDropdownVisible && (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Orders</Text>
            <Text style={styles.sectionContent}>
              Hi! You have no recent orders.
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>
                Return to the Homepage
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.section, styles.highlightedSection]}>
            <Text style={styles.sectionTitle}>Buy Again</Text>
            <Text style={styles.sectionContent}>
              See what others are reordering Buy Again.
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Visit Buy Again</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Lists</Text>
            <Text style={styles.sectionContent}>
              You haven't created any lists.
            </Text>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Create a List</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Account</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4E1",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFC0CB",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D3D3D3",
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
  },
  dropdownToggle: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: "48%",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: "48%",
    alignItems: "center",
    marginBottom: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "black",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 16,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  highlightedSection: {
    borderColor: "#4169E1",
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionContent: {
    marginBottom: 12,
    color: "#9B9B9B",
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  actionButtonText: {
    color: "black",
  },
});
