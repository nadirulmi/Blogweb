const axios = require('axios');
const { APP_ID } = process.env;

const getPost = async (req, res) => {
  try {
    const {data} = await axios.get('https://dummyapi.io/data/v1/post', {
      headers: {
        'app-id': APP_ID,
      },
    });
    
    const apiPost = data.data.map((post) => ({
      id: post.id,
      image: post.image,
      tags: post.tags,
      user: `${post.owner.firstName} ${post.owner.lastName}`,
    }));

    res.status(200).json(apiPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPost,
};