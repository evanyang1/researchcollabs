import axios from 'axios';

const API_URL = 'https://api.example.com/users'; // Replace with your actual API URL

export const fetchUsers = () => {
  return axios.get(API_URL);
};

export const createUser = (userData) => {
  return axios.post(API_URL, userData);
};

// Add more API calls as needed
