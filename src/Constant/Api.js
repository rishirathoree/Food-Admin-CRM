import axios from "axios";
const baseURL = `http://${import.meta.env.VITE_IP_ADDRESS}:5000`

const instance = axios.create({
  baseURL,
});

const GetToken = () => {
  const token = localStorage.getItem('token')
  return token
}

const Api = {
  get: async (url, params, token = null) => {
    try {
      const headers = token ? { 'Authorization': `Bearer ${token}` } : { 'Authorization': `Bearer ${GetToken()}` };
      const response = await instance.get(url, { params, headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (url, data, params, token) => {
    try {
      const headers = token ? { 'Authorization': `Bearer ${token}` } : { 'Authorization': `Bearer ${GetToken()}` };
      const response = await instance.post(url, data, { params, headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  put: async (url, data, params, token) => {
    try {
      const headers = token ? { 'Authorization': `Bearer ${token}` } : GetToken();
      const response = await instance.put(url, data, { params, headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (url, params, token) => {
    try {
      const headers = token ? { 'Authorization': `Bearer ${token}` } : GetToken();
      const response = await instance.delete(url, { params, headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Api;
