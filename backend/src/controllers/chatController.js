const axios = require('axios');
const chatModel = require('../models/ChatModel');

const chat = async (req, res) => {
  const { message } = req.body;
  try {
    const chat_response = await axios.post(
      'https://api.opentyphoon.ai/v1/chat/completions',
      {
        model: 'typhoon-v1.5-instruct',
        max_tokens: 512,
        messages: [{ role: 'user', content: message }],
        temperature: 0.3,
        top_p: 0.9,
        top_k: 0,
        repetition_penalty: 1.05,
        min_p: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TYPHOON_API_KEY}`,
        },
      }
    );

    const chatContent = chat_response.data.choices[0].message.content;

    const newChat = new chatModel({ prompt: message });
    
    await newChat.save().catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
    
    res.json(chatContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { chat };
