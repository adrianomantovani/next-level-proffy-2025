import express from 'express';
import cors from 'cors';
import routes from './routes.ts';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT} 🚀`);
});
