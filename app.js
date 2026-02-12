const express = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, This Is The Default!");
});

app.get('/math/factorial', (req, res) => {
    let f = 1;
    for(let i = 1; i <= req.query.n; i++) f *= i;
    res.json({ factorial: f });
});

app.get('/math/fibonacci', (req, res) => {
    res.json({ fib: 'Not implemented for brevity' });
});

app.get('/math/prime', (req, res) => {
    const n = req.query.n;
    res.json({ isPrime: n > 1 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
