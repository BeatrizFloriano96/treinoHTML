const express = require('express')

let app = express();

let frutas = [
    {
        id: 1,
        name: 'Banana'
    },
    {
        id: 2,
        name: "Maçã"
    }
]


app.use(express.json()); //Definir o tipo de arquivo utilizado. O APP.JS vai uasr JSON.

app.get('/frutas', (req,res)=>res.send(frutas));

app.post('/frutas', (req,res) => {
    frutas.push(req.body)            //O body quer dizer que estou enviando dados para o corpo da requisição, em forma de texto.
    res.send(frutas)
});

app.put('/frutas/:id', (req,res) => {
    let fruta = frutas.find(fr => fr.id == req.params.id)
    fruta.name = req.body.name
    res.send(frutas)
});

app.delete('/frutas/:id', (req,res) => {
    let fruta = frutas.find(fr => fr.id == req.params.id)
    for (let i = 0; i < frutas.length;i++){
        if (frutas[i] === fruta){
            frutas.shift(usuario)
            break
        }
    }
})

app.listen(8022, ()=>console.log('Servidor rodando'));
