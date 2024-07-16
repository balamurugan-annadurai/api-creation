import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
const PORT = 4000

app.get('/welcome', (req, res) => {
    res.status(200).json({msg:"Welcome guys!"})
})


app.listen(PORT, () => {
    console.log("App is listening");
})