import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

// ---------------------------
// CORS Setup
// ---------------------------
// Agar aap chahte ho ke sirf frontend se requests allow ho:
app.use(cors({
  origin: 'https://react-project-tau-olive.vercel.app/', // yahan apna frontend deploy URL daal do
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // agar cookies ya auth tokens use ho rahe hain
}));

// ---------------------------
// JSON body parser
// ---------------------------
app.use(express.json());

// ---------------------------
// Sample Route
// ---------------------------
app.post('/AdminReg', (req, res) => {
    console.log("Request body:", req.body);
    // aapka registration logic
    res.json({ message: "Admin Registered Successfully!" });
});

// ---------------------------
// MongoDB Connection
// ---------------------------
mongoose.connect('mongodb://localhost:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// ---------------------------
// Server Start
// ---------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port no. ${PORT}`));