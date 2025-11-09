import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const UserList = ({users}) => {
  const renderUser = ({item}) => (
    <View style={styles.userCard}>
      <View style={styles.userHeader}>
        <Text style={styles.userId}>ID: {item.id}</Text>
      </View>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </View>
  );

  if (!users || users.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No users found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      renderItem={renderUser}
      keyExtractor={item => item.id.toString()}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  userId: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default UserList;
