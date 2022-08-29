import express from "express";

const app = express()
app.use(express.json())

const people = []

app.get("/", (req, res) => {
    res.json({
        ok: true,
        data: people
    })
});


app.post("/create", (req, res) => {
    const data = req.body
    data.id = people.length+1;
    people.push(data)
    
    return res.status(201).json({
        ok: true,
        data: "Persona creada"
    })
})

app.put("/editar/:id", (req, res) => {
    let ident = req.params.id
    const {name, lastname, age} = req.body
    console.log(ident)
    for (let x = 0; x < people.length; x++) {
        if (people[x].id == ident) {
            people[x].name = name
            people[x].lastname = lastname
            people[x].age = age
            return res.status(201).json({
                ok: true,
                data: "Persona editada"
            })
        }
    }
})

app.delete("/eliminar/:id", (req, res) => {
    let ident = req.params.id
    console.log(ident)

    for (let x = 0; x < people.length; x++) {
        if (people[x].id == ident) {
            people.splice(x,1)
            return res.status(201).json({
                ok: true,
                data: "Persona eliminada"
            })
        }
    }
})

app.listen(6004, () => 
console.log("El servidor se inció en el servidor http://localhost:6004"));