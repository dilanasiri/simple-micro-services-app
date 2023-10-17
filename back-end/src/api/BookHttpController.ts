import express from 'express';
import {datasource} from '../db/dbcp.ts';

export const router=express.Router();

async function test(): Promise<void>{
    console.log(await datasource.getConnection());
}
await datasource.getConnection();
router.delete('/:isbn',(req,res)=>{
    res.send("<h1>Hello delete</h1>");
});
router.patch('/:isbn',(req,res)=>{
    res.send("<h1>Hello patch</h1>");
});

