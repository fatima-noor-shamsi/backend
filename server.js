import express from 'express';
import cors from 'cors';

const app = express();




app.use(cors({
  origin: 'https://react-project-tau-olive.vercel.app/'
}));

app.use(express.json());
app.post('/AdminReg', (req, res) => {
    // your logic
});