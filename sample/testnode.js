const express = require('express');
const app     = express();


// Start
app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
});

// Other
app.get('/sss', (req, res) => {
    txt="textarea поле";
    Page(req,res,txt);
    // res.send('<h1>Test</h1>');
});


// Other
app.get('/user', (req, res) => {
    txt="Вы выбрали пользоввтеля";
    Page(req,res,txt);
    // res.send('<h1>Test</h1>');
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


function Page(req,res,txt){
     res.send(`<h1>Пример создания страницы со своим текстом ${txt}</h1>`);
}

