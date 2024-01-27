import axios from 'axios';

export const getPost = async () => {
  try {
    const response = await axios.get('http://localhost:3001/blog/post');

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getDetail = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/blog/detail/${id}`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getComments = async(id) =>{
  try {
    const response = await axios.get(`http://localhost:3001/blog/comment/${id}`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getTags = async() =>{
  try {
    const response = await axios.get(`http://localhost:3001/blog/tags`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getUsers = async() =>{
  try {
    const response = await axios.get(`http://localhost:3001/blog/users`);

    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}