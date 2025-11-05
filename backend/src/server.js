import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { ENV } from './lib/env.js';

dotenv.config();

const app = express();

// Fix for ES modules (get proper dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

// Example route
app.get('/books', (req, res) => {
  res.status(200).json({ msg: "This is the books endpoint" });
});

// Serve frontend in production
if (process.env.NODE_ENV === 'production' || ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
  });
}

// ✅ Sevalla injects its own PORT into process.env
const PORT = process.env.PORT || ENV.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
