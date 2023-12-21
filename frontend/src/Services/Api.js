import axios from 'axios';

// Assuming your backend is running on the same domain and port
const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        console.log('API hit successful'); // Ensure this log is displayed
        const response = await axios.post(`${URL}/add`, data);
        console.log('Response:', response.data); // Log the response for debugging
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error adding user:', error); 
        throw error; // Re-throw the error to handle it in the calling code
    }
};
