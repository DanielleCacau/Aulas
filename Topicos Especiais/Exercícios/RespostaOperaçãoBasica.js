 // Resposta do ultimo exercicio Opere��o basicas //
 
// Quest�o 01
db.pessoa.find({})

// Quest�o 02
db.pessoa.find({},{_id:0,nome:1,idade:1})

// Quest�o 03

db.pessoa.find({nome:"Brenda"})

// Quest�o 04
db.pessoa.find({nome:"Gerson"},{nome:1,salario:1})

// Quest�o 05
db.pessoa.find({nome:{$regex:"^A"}})

// Quest�o 07
db.pessoa.find({nome:{$regex:"ci"}})

// Quest�o 08
db.pessoa.find({nome:{$regex:"ta\$"}})

// Quest�o 09
db.pessoa.find({salario:{$gt:10.000}})

// Quest�o 10
db.pessoa.find({salario:{$gte:2000.00}})

// Quest�o 11
db.pessoa.find({salario:{$lt:1000.00}})

// Quest�o 12
db.pessoa.find({idade:{$lt:20}})

// Quest�o 13
db.pessoa.find({salario:{$gt:1000.00},idade:18})

// Quest�o 14
db.pessoa.find({idade:{$gt:20,$lt:30}})

// Quest�o 15
db.pessoa.find({salario:{$gt:1000.00},idade:{$gt:40}})


