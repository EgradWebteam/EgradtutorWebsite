const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 8080;

// place holder for the data
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

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/client/build/"));



app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/client/build/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});