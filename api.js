const express = require("express");
const app = express();

const PORT = 3000;

app.use(express());
let books = [
    {
        id:1,
        title:'the greate gateway',
        author:'prince kumar',
    },
    {
        id:2,
        title:'to kill the mockingbird',
        author:'prince kumar',
    },
    
];

let  users =[
    {
        id:1,
        name:'prince kumar',
        email:'princekumar@gmail.com',
    }
];

app.get('/api/books',(req,res)=>{
    res.json(books);
})

app.get('/api/book/:id',(req,res)=>{
    const id= parsInt(req.params.id);
    const book = books.find(book => book.id ===id);

    if(book){
        res.json(book);
    }
    else{
        res.status(404).json({message:'book not found'});
    }
})

app.post('/api/users',(req,res)=>{
    const newUser = {
        id: users.length+1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser);
    res.status(201).json(newUser)
})
app.listen(PORT, ()=>{
    console.log("server is runnning on ",PORT);
})