const port = 3001;
const exp = require('express');
const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extended: true })); 
app.use(exp.static('public'));

let storedName = "";

app.post('/submit-name', (req, res) => {
    storedName = req.body.username; 
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    res.send(`
        <div style="text-align: center; margin-top: 50px;">
            <h1>Hello, ${storedName}!</h1>
            <br>
            <a href="/">Go Back</a>
        </div>
    `);
});

app.get('/api', (req, res) => {
    res.json({ message: "HELLO" });
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
