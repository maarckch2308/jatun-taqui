import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const fetchMatches = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/matches`);
        return response.data;
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
};