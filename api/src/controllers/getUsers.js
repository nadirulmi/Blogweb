const axios = require("axios");
const { APP_ID } = process.env;

const getUsers = async (req, res) => {
  try {
    const { data } = await axios.get("https://dummyapi.io/data/v1/user", {
      headers: {
        "app-id": APP_ID,
      },
    });

    const usersData = data.data.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      image: user.picture,
    }));
    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
};
