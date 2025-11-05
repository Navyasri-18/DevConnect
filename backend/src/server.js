import express from 'express';
import { ENV } from './lib/env.js';
import path from 'path';

const app = express()
const __dirname = path.resolve();

app.get('/health', (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
})

app.get('/books', (req, res) => {
  res.status(200).json({ msg: "this is the books endpoint" });
})

//Make our app ready for deployment
if (ENV.NODE_ENV === 'production') {
  // in backend/index.js
  app.use(express.static('../frontend/dist'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'))
  })

}

app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:3000`)
})
