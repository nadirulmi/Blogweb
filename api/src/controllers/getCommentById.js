const axios = require('axios');
const { APP_ID } = process.env;
const URL = "https://dummyapi.io/data/v1/post";

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}/comment`, {
      headers: {
        'app-id': APP_ID,
      },
    });

    if (response.data.data) {
      const simplifiedComments = response.data.data.map(comment => ({
        id: comment.id,
        message: comment.message,
        owner: comment.owner,
      }));

      return res.status(200).json(simplifiedComments);
    } else {
      return res.status(404).json({ error: 'Comentarios no encontrados' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCommentById
};
