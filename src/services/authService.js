import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const signup = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3000/users/signup', formData);
    console.log(response)
    if(response.data.error) {
      throw new Error(response.data.error)
    }
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  signup,
};
