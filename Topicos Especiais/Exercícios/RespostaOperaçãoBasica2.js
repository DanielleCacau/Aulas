
   //1. Exibir a quantidade de produtos cadastrados.
   db.produtos.count()
   //2. Exibir a quantidade de produtos que s�o ferramentas.
   db.produtos.find({generoFamilia:"Ferramentas"}).count()
   //3. Exibir as distintas unidades de medida.
   db.produtos.distinct("uni")
   //4. Exibir o nome dos distintos g�neros.
   db.produtos.distinct("generoFamilia")
   //5. Exibir a quantidade de produtos que sejam da marca TT.
   db.produtos.find({marca:
                          {$in:["TT"]}}).count()
   //6. Exibir os produtos que s�o do grupo de perif�ricos ou suprimentos.
   db.produtos.find({generoFamilia:{$in:["Perifericos","Suprimentos"]}})
   //7. Exibir os produtos que n�o s�o embalagens.
   db.produtos.find({generoFamilia:{$nin:["Embalagens"]}})
   //8. Exibir os produtos ordenados pelo nome em ordem crescente.
   db.produtos.find().sort({"nome":1})


