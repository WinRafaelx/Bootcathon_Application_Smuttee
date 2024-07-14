const axios = require("axios");

exports.chat = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://api.opentyphoon.ai/v1/chat/completions",
      {
        model: "typhoon-v1.5x-70b-instruct",
        messages: [{"role": "user", "content": message}],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_TYPHOON_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", response.data.choices[0].message.content);
    res.json(response.data.choices[0].message.content); // Send the response back to the client
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to send message to Typhoon API" });
  }
};
