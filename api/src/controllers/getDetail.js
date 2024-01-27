const axios = require("axios");
const { APP_ID } = process.env;
const URL = "https://dummyapi.io/data/v1/post";

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        "app-id": APP_ID,
      },
    });
    
    if (response.data) res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDetail,
};
