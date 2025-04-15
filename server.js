import express from 'express'

import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors("http://localhost:5173", "https://toodo-liist.netlify.app"))



app.get('/todo', async(req,res)=>{
   const todo= await prisma.user.findMany()
    res.status(200).json(todo)
})

app.post('/todo', async (req,res)=>{
  await  prisma.user.create({
        data:{
            text:req.body.text,
            category:req.body.category,
            isCompleted:req.body.isCompleted
        }
    })
    res.status(201).json({"Message": "feito"})
})


app.put('/todo/:id', async (req,res)=>{
    await  prisma.user.update({
        where:{
            id:req.params.id
        },
          data:{
              isCompleted:req.body.isCompleted
          }
      })
      res.status(201).json({"Message": "feito"})
  })

  app.delete('/todo/:id', async (req, res)=>{
     await prisma.user.delete({
        where:{
            id:req.params.id
        }
     })
     res.status(200).json({"Message": "Tarefa deletada com sucesso"})
  })







app.listen(3050)



/* 
Eduardo
gQZeXJEViYMR2TwN


mongodb+srv://Eduardo:gQZeXJEViYMR2TwN@todo-list.k33kr.mongodb.net/?retryWrites=true&w=majority&appName=todo-list

*/