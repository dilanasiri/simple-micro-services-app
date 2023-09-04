import express from 'express';

export const router=express.Router();

router.delete('/:isbn',(req,res)=>{
    res.send("<h1>Hello delete</h1>");
});
router.patch('/:isbn',(req,res)=>{
    res.send("<h1>Hello patch</h1>");
});

