const express= require('express')
const Tarea= require('./Models/Tarea')
const { where } = require('sequelize')



const app = express()


app.use(express.json())

//GET  --> Se utiliza consultar  --> parametros utr
//POST --> se utiliza para guardar --> body
//PUT   --> actualizar --> body
//DELETE --> eliminar informaicon --> parametros u body


//200   --> la respuesta son exitosas
//400 --> que no hay informacion
//500 --> indicar uque hubo error
//201 --> creo un reigstro
//401  0 403--> autenticados
//402

//request  --> el backend recibe, cliente envia
//response --> el backedn envia y cliente recibe

//url

app.get('/tarea',async (req,res)=>{

    try {
        //selec *from tarea

        const tarea = await Tarea.findAll();

        (tarea.length>0) 
                ? res.status(200).json(tarea) 
                : res.status(400).json({'mensaje':'No existe informacion'})

    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
})

app.post('/tarea', async(req,res)=>{
        try {
            console.log(req.body)
            //insert into tarea (1,'dasda')
            const tarea = await Tarea.create(req.body)
            res.status(200).json(tarea)
            
        } catch (error) {
            res.status(500).json({'mensaje':'Ocurrio un error'})
        }
})

app.put('/tarea/:id', async(req,res) =>{
    try {
        
        //update tarea set descripcion='valr' where id=1
        const [updated]= await Tarea.update(req.body,{
            where: {id: req.params.id}
        })

        if(updated) {
            res.status(200).json({'mensaje':'Actualizado Correctamente'})
        }
             
        else {
            res.status(400).json({'mensaje':'Registro no encontrado'})
        }
            
        
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error' + error})
    }
})

app.delete('/tarea/:id', async(req,res)=>{
    try {
        
        //delete from tarea where id=2
        
        const deleted= await Tarea.destroy({
            where: {id: req.params.id}
        })

        if(deleted) {
            res.status(200).json({'mensaje':'Registro eliminado Correctamente'})
        }
             
        else {
            res.status(400).json({'mensaje':'Registro no encontrado'})
        }
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error' + error})   
    }
})

app.listen(5000, ()=>{
    console.log('Aplicaconi ejecuantando en puerto 5000')
})