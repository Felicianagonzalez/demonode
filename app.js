const express = require('express')
const app = express()
app.set('view engine', 'ejs')

let datos =[
    {
        id: 1,
        nombre:'Araceli',
        apellido:'Rendón Hernandez',
        materia:['Paginas web','BD2','Metodos']
    },
    {id: 2,
        nombre:'Martin',
        apellido:'Reyes Mendez',
        materia:['Paginas web','BD2','Metodos']},
    {id: 3,
        nombre:'Fausta',
        apellido:'Vazquez Sanchez',
        materia:['Paginas web','BD2','Metodos']},
    {id: 4,
        nombre:'Elias',
        apellido:'Sanchez Garcia',
        materia:['Paginas web','BD2','Metodos']},
    {id: 5,
        nombre:'Efrain',
        apellido:'Castillo',
        materia:['Paginas web','BD2','Metodos']},
    {id: 6,
        nombre:'Luz Areli',
        apellido:'Patolillo Nava',
        materia:['Paginas web','BD2','Metodos']},
    {id: 7,
        nombre:'Daniel',
        apellido:'Visca Villanueva',
        materia:['Paginas web','BD2','Metodos']},
    {id: 8,
        nombre:'Joel',
        apellido:'Rosendo Nava',
        materia:['Paginas web','BD2','Metodos']}
    
]

app.get('/', (req,res) => {
    //res.send('Hola mundo basico')
    res.render('index',{saludo2:'Datos enviados desde EJS',personas:datos})
})
app.listen(3000, () => {
    console.log('Escuchando el puerto 3000')
})