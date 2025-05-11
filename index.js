import { error } from 'console';
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const data = JSON.parse(fs.readFileSync('proverbs.json', 'utf8'));
const readData = () => JSON.parse(fs.readFileSync('proverbs.json', 'utf-8'));
const writeData = (data) => fs.writeFileSync('proverbs.json', JSON.stringify(data, null, 4));

app.get('/proverbs', (req,res)=>{
    const proverbs = readData();
    res.json(proverbs);
});

app.get('/proverbs/:id', (req,res)=>{
    const proverbs = readData();
    const id = parseInt(req.params.id);
    const proverb = proverbs.find(p => p.id === id);
    if(!proverb) {
        return res.status(404).json({error: 'Proverb not found ❗'});
    }
    res.json(proverb);
});

app.post('/proverbs',(req,res)=>{
    const newProverb = req.body;
    const newproverbId = data.length > 0 ? Math.max(...data.map(p => p.id)) + 1 : 1;
    newProverb.id = newproverbId;
    data.push(newProverb);
    fs.writeFileSync('proverbs.json', JSON.stringify(data, null, 4));
    res.send("Proverb added successfully!");
});

app.put('/proverbs/:id', (req,res)=>{
    const proverbs = readData();
    const id = parseInt(req.params.id);
    const index = proverbs.findIndex(p => p.id === id);
    if(index === -1) {
        return res.status(404).json({error: 'Proverb not found ❗'});
    }
    const updatedProverb = { ...proverbs[index], ...req.body, id: id};
    proverbs[index] = updatedProverb;
    writeData(proverbs);
    res.json(updatedProverb);
});

app.delete('/proverbs/:id', (req,res)=>{
    let proverbs = readData();
    const id = parseInt(req.params.id);
    const index = proverbs.findIndex(p => p.id === id);

    if (index === -1) {
        return res.json({ error: 'Proverb not found❗'});
    }
    proverbs.splice(index, 1);
    writeData(proverbs);
    res.json({ message: 'Proverb deleted successfully✅'})
});

app.get('/proverbs/random', (req,res)=>{
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomProverb = data[randomIndex];
    res.json(randomProverb)
});

app.listen(PORT, ()=>{
    console.log("Server is running");
})