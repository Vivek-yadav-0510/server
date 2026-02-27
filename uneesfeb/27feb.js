//server.js

const express =require('express');
const app=express();
const PORT =3000;

//To define the sample data 

let books=[
   { 
    id:1,
    title:'The Great Gatsby',
    aurthor:'F.Scott Fitzgerald'
   },
   {
    id:2,
    title:'To Kill a Mockingbird'
   }
];

//define routes for handling get requests
app.get('/books',(req,res)=>{
    res.json(books);

});
app.get('/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=books.find(b=>b.id===bookId);
    if(book){
        res.json(book);
    }else{
        res.status(404).json({message:"Book not found"});
    }
});

//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});