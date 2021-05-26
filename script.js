//1
let object = {
    name: `cube`,
    age: 2502 ,
    human: false,
}
console.log(object)

//2
object.shape = `Solid`
console.log(object)

//3
delete object.age
console.log(object)

//4   não entendi
console.log(object.shape, object.age, object.human, object.name)

//5
let cadastro = [
    {
        nome: `pessoa1`,
        idade: 19,
        telefone: 1215325532,
        amigos:[`amigo1`,`amigo2`,`amigo3`,`amigoA`]
    },
    {
        nome: `pessoa2`,
        idade: 22,
        telefone: 1215455532,
        amigos:[`amigo4`,`amigo5`,`amigo6`,`amigoB`]
    },
    {
        nome: `pessoa3`,
        idade: 12,
        telefone: 3456325532,
        amigos:[`amigo7`,`amigoC`,`amigo8`,`amigo9`]
    },
    {
        nome: `pessoa4`,
        idade: 26,
        telefone: 5555325532,
        amigos:[`amigo10`,`amigo11`,`amigoD`,`amigo12`]
    },
    {
        nome: `pessoa5`,
        idade: 52,
        telefone: 1245325763,
        amigos:[`amigoE`,`amigo13`,`amigo16`,`amigo15`]
    },
]
console.log(cadastro[0].amigos[3], cadastro[1].amigos[3], cadastro[2].amigos[1], cadastro[3].amigos[2], cadastro[4].amigos[0])