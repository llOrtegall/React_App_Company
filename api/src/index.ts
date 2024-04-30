import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`),
);