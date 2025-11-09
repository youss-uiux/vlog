import axios from 'axios';

// Backend URL - update this to match your Spring Boot server
const API_BASE_URL = 'http://localhost:8080/api';

class NetworkService {
  /**
   * Make a network request through the backend
   */
  static async makeRequest(url, method = 'GET', body = null) {
    try {
      const response = await axios.post(`${API_BASE_URL}/network/request`, {
        url,
        method,
        body,
      });
      return response.data;
    } catch (error) {
      console.error('Network request error:', error);
      throw error;
    }
  }

  /**
   * Get all users from the backend
   */
  static async getUsers() {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Get users error:', error);
      throw error;
    }
  }

  /**
   * Get a single user by ID
   */
  static async getUserById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get user error:', error);
      throw error;
    }
  }

  /**
   * Create a new user
   */
  static async createUser(user) {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, user);
      return response.data;
    } catch (error) {
      console.error('Create user error:', error);
      throw error;
    }
  }

  /**
   * Update an existing user
   */
  static async updateUser(id, user) {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${id}`, user);
      return response.data;
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  }

  /**
   * Delete a user
   */
  static async deleteUser(id) {
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
    } catch (error) {
      console.error('Delete user error:', error);
      throw error;
    }
  }

  /**
   * Check backend health
   */
  static async healthCheck() {
    try {
      const response = await axios.get(`${API_BASE_URL}/network/health`);
      return response.data;
    } catch (error) {
      console.error('Health check error:', error);
      throw error;
    }
  }
}

export default NetworkService;
