const axios = require("axios");
const { APP_ID } = process.env;
const getTags = async (req, res) => {
  try {
    const { data } = await axios.get("https://dummyapi.io/data/v1/post", {
      headers: {
        "app-id": APP_ID,
      },
    });

    const apiTags = new Set(
      data.data
        .map((tag) => tag.tags)
        .join(",")
        .split(/,\s*/)
        .filter((tags) => tags.length > 0)
    );

    const newTags = Array.from(apiTags);

    res.status(200).json(newTags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTags,
};
