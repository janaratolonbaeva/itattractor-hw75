const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');
const app = express();
const port = 8000;

app.listen(port);


app.post('/encode/', (req, res) => {
	const message = req.body;
	Vigenere.Cipher(message.password).crypt(message.encoded);
});

app.post('/decode/', (req, res) => {
	const message = req.body;
	Vigenere.Decipher(message.password).crypt(message.decoded);
});

