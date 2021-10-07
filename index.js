const express = require('express');
const app = express();
const PORT = 8080;

const anji = require('data/anji.json')
const axl = require('data/axl.json')
const chipp = require('data/chipp.json')
const faust = require('data/faust.json')
const giovanna = require('data/giovanna.json')
const goldlewis = require('data/goldlewis.json')
const ino = require('data/i-no.json')
const jacko = require('data/jack-o.json')
const ky = require('data/ky.json')
const leo = require('data/leo.json')
const may = require('data/may.json')
const millia = require('data/millia.json')
const nagoriyuki = require('data/nagoriyuki.json')
const potemkin = require('data/potemkin.json')
const ramlethal = require('data/ramlethal.json')
const sol = require('data/sol.json')
const zato = require('data/zato.json')


app.use(express.json())

app.listen(
    PORT,
    () => console.log(`Alive on http://localhost:${PORT}`)
)

app.get('/api/anji', (req, res) =>{
    res.status(200).send({
        anji
    })
});

app.get('/api/axl', (req, res) =>{
    res.status(200).send({
        axl
    })
});

app.get('/api/chipp', (req, res) =>{
    res.status(200).send({
        chipp
    })
});

app.get('/api/faust', (req, res) =>{
    res.status(200).send({
        faust
    })
});

app.get('/api/giovanna', (req, res) =>{
    res.status(200).send({
        giovanna
    })
});

app.get('/api/goldlewis', (req, res) =>{
    res.status(200).send({
        goldlewis
    })
});

app.get('/api/i-no', (req, res) =>{
    res.status(200).send({
        ino
    })
});

app.get('/api/jack-o', (req, res) =>{
    res.status(200).send({
        jacko
    })
});

app.get('/api/ky', (req, res) =>{
    res.status(200).send({
        ky
    })
});

app.get('/api/leo', (req, res) =>{
    res.status(200).send({
        leo
    })
});

app.get('/api/may', (req, res) =>{
    res.status(200).send({
        may
    })
});

app.get('/api/millia', (req, res) =>{
    res.status(200).send({
        millia
    })
});

app.get('/api/nagoriyuki', (req, res) =>{
    res.status(200).send({
        nagoriyuki
    })
});

app.get('/api/potemkin', (req, res) =>{
    res.status(200).send({
        potemkin
    })
});

app.get('/api/ramlethal', (req, res) =>{
    res.status(200).send({
        ramlethal
    })
});

app.get('/api/sol', (req, res) =>{
    res.status(200).send({
        sol
    })
});

app.get('/api/zato', (req, res) =>{
    res.status(200).send({
        zato
    })
});
