import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

const signup = async (formData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/users/signup`, formData);
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

const signin = async (userData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/users/signin`, userData);
    
    if(res.data.error) {
      throw new Error(res.data.error);
    }
    if(res.data.token) {
      const user = JSON.parse(atob(res.data.token.split(".")[1]));
      return user;
    }
  } catch (err) {
      console.log(err);
    throw err;
  }
};

export {
  signup,
  signin
};
