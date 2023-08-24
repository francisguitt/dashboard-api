const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/index');
const port = 3000;
app.use(cors());
app.use(express.json());

app.use(router);
app.get(('*'), (req, res) => {
    res.status(404).json({ error: 'Page not found !' })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

