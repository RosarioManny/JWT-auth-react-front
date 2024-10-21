import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_UR

const signup = async (formData) => {
  try {
    const response = await axios.post('http://localhost300/users/signup', formData);
    console.log(response)
    
    return response.data
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  signup,
};
