const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express(),
      bodyParser = require("body-parser");
      port = 8080;
app.use(bodyParser.json());
// place holder for the data
app.use(cors());
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.post('/api/submitForm', (req, res) => {
    const { name, phoneNumber } = req.body;
    console.log('Received Form Data:', { name, phoneNumber });
    res.json({ message: 'Form submitted successfully!' });
  });

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
  });


// app.use(express.static(process.cwd()+"/client/build/"));



// app.get('/', (req,res) => {
//   res.sendFile(process.cwd()+"/client/build/index.html");
// });


app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,"client", 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});