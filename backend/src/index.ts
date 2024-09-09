import express from "express"
import dotenv from 'dotenv';

dotenv.config();

import router from "./routes/index.routes"

const app = express();
const port = process.env.PORT || 3000;

app.get('/', () => {
 ('Hello, TypeScript!');
});

app.use('/api',router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
