import 'dotenv/config';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/tokenize', async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).json({ error: 'Text is required' });
    }

    const { totalTokens } = await ai.models.countTokens({
      model: 'gemini-2.0-flash',
      contents: text,
    });

    res.json({
      totalTokens,
      message: 'Tokenizer operation successful',
    });
  } catch (error) {
    console.error('Error in tokenize operation:', error);
    res.status(500).json({ error: 'An error occurred during tokenization' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on port ${process.env.PORT || 3000} in ${process.env.NODE_ENV} mode`,
  );
});
