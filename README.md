# Tokr

A simple API service for tokenizing text using Google's Gemini AI model. This service provides an endpoint to count tokens in text input, which is useful for managing API usage and text processing tasks.

## Features

- CORS enabled
- RESTful API endpoint
- Text tokenization using Google's Gemini AI model

## Prerequisites

- Node.js (v14 or higher)
- Google Gemini API key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/prudentbird/tokr.git
cd tokr
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
GEMINI_API_KEY=your_gemini_api_key
```

### Development

To run the server in development mode with hot-reload:

```bash
pnpm dev
```

### Production

To build and run the server in production mode:

```bash
pnpm build
pnpm start
```

### POST /api/tokenize

Counts the number of tokens in the provided text.

**Request Body:**

```json
{
  "text": "Your text to tokenize"
}
```

**Success Response:**

```json
{
  "totalTokens": 42,
  "message": "Tokenizer operation successful"
}
```

**Error Response:**

```json
{
  "error": "Error message"
}
```

## Author

GitHub: [@prudentbird](https://github.com/prudentbird), Twitter: [@prudentbird](https://x.com/prudentbird)
