import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import NetworkService from './src/services/NetworkService';
import UserList from './src/components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await NetworkService.getUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to load users: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const makeNetworkRequest = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await NetworkService.makeRequest(url);
      setResponse(result);
    } catch (err) {
      setError('Network request failed: ' + err.message);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Network App</Text>
          <Text style={styles.subtitle}>React Native + Spring Boot WebFlux</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Custom Network Request</Text>
          <TextInput
            style={styles.input}
            value={url}
            onChangeText={setUrl}
            placeholder="Enter URL"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={makeNetworkRequest}
            disabled={loading}>
            <Text style={styles.buttonText}>
              {loading ? 'Loading...' : 'Make Request'}
            </Text>
          </TouchableOpacity>

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {response && (
            <View style={styles.responseContainer}>
              <Text style={styles.responseTitle}>Response:</Text>
              <Text style={styles.responseText}>
                Status: {response.statusCode}
              </Text>
              <Text style={styles.responseText}>
                Time: {response.responseTime}ms
              </Text>
              <Text style={styles.responseText}>
                Success: {response.success ? 'Yes' : 'No'}
              </Text>
              {response.body && (
                <Text style={styles.responseBody} numberOfLines={10}>
                  {JSON.stringify(JSON.parse(response.body), null, 2)}
                </Text>
              )}
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User List</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={loadUsers}
            disabled={loading}>
            <Text style={styles.buttonText}>
              {loading ? 'Loading...' : 'Refresh Users'}
            </Text>
          </TouchableOpacity>
          {loading ? (
            <ActivityIndicator size="large" color="#007AFF" />
          ) : (
            <UserList users={users} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#FFE5E5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
  },
  responseContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 15,
  },
  responseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  responseText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  responseBody: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'monospace',
    marginTop: 10,
  },
});

export default App;
