// import { UserConn } from './connections/userConn';
import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 3030
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// async function testConnection() {
//   try {
//     await UserConn.authenticate()
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error)
//   }
// }

// testConnection()