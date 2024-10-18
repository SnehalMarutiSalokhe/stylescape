import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { fonts } from '../utils/fonts'; 

const ReorderScreen = () => {
  const { cartItems } = useContext(CartContext);
  const favoriteProducts = cartItems.filter((item) => item.isFavorite); 

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteItemContainer}>
      <TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.favoriteImage} />
        <Text style={styles.favoriteText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemText}>Size: {item.size}</Text>
                <Text style={styles.itemText}>Color: {item.color}</Text>
                <Text style={styles.itemText}>${item.price}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.emptyText}>No items in your order history.</Text>
      )}

      {favoriteProducts.length > 0 && (
        <View>
          <Text style={styles.favoriteTitle}>Favorite Items</Text>
          <FlatList
            data={favoriteProducts}
            horizontal
            renderItem={renderFavoriteItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.favoriteListContainer}
          />
        </View>
      )}
    </View>
  );
};

export default ReorderScreen;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFBFC',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.regular,
    fontWeight: '700',
    color: '#444444',
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#FDF0F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2, 
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: '#444444',
  },
  emptyText: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: '#E55B5B',
    textAlign: 'center',
    marginTop: 50,
  },
  favoriteTitle: {
    fontSize: 22,
    color: '#E96E6E',
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
  },
  favoriteListContainer: {
    paddingBottom: 10,
  },
  favoriteItemContainer: {
    marginRight: 10,
  },
  favoriteImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  favoriteText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: '#444444',
    marginTop: 5,
    textAlign: 'center',
  },
};
