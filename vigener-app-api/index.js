const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.listen(port);

app.post('/encode/', (req, res) => {
	const message = req.body;
	const answer = Vigenere.Cipher(message.password).crypt(message.encode);
	res.send(answer);
});

app.post('/decode/', (req, res) => {
	const message = req.body;
	const answer = Vigenere.Decipher(message.password).crypt(message.decode);
	res.send(answer);
});

