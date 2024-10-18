// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AccountScreen = () => {
//   return (
//     <View>
//       <Text>coming soon</Text>
//     </View>
//   )
// }

// export default AccountScreen

// const styles = StyleSheet.create({})


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>STYLESCAPE</Text>
        <View style={styles.headerIcons}>
          {/* <Ionicons name="settings-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="search-outline" size={24} color="black" /> */}
        </View>
      </View>
      
      <View style={styles.profileSection}>
        <View style={styles.avatar} />
        <Text style={styles.greeting}>Hello, Prajkta</Text>
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
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Orders</Text>
        <Text style={styles.sectionContent}>Hi! You have no recent orders.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Return to the Homepage</Text>
        </TouchableOpacity>
      </View>
      
      <View style={[styles.section, styles.highlightedSection]}>
        <Text style={styles.sectionTitle}>Buy Again</Text>
        <Text style={styles.sectionContent}>See what others are reordering Buy Again.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Visit Buy Again</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Lists</Text>
        <Text style={styles.sectionContent}>You haven't created any lists.</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Create a List</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Account</Text>
        {/* Add account details or options here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFC0CB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 16,
    padding: 16,
  },
  highlightedSection: {
    borderColor: '#4169E1',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  actionButtonText: {
    color: 'black',
  },
});