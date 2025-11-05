import express from 'express';
import { ENV } from './lib/env.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/health', (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

app.get('/books', (req, res) => {
  res.status(200).json({ msg: "This is the books endpoint" });
});

// ✅ Serve frontend in production
if (process.env.NODE_ENV === 'production' || ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
  });
}

// ✅ Sevalla injects PORT dynamically; fall back to local 3000 if missing
const PORT = process.env.PORT || ENV.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
