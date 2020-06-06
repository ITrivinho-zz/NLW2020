// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o obj de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
// db.serialize( () => {
//      com comandos SQL eu vou:

//      1. criar uma tabela 
//      db.run(`
//          CREATE TABLE IF NOT EXISTS places (
//              id INTEGER PRIMARY KEY AUTOINCREMENT,
//              name TEXT,
//              image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             itens TEXT
//         );
//     `)

//     2. inserir dados a tabela
//     const query = `
//         INSERT INTO places (
//             name,
//             image,
//             address,
//             address2,
//             state,
//             city,
//             itens
//         ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `

//     const values = [
//         "Papersider",
//         "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papeis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)          
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//      3. consultar os dados da tabela
    //  db.all(`SELECT * FROM places`, function(err, rows) {
    //      if(err) {
    //          return console.log(err);
    //      }

    //      console.log("Aqui estão seus registros: ");
    //      console.log(rows)        
    //  })

    // 4. deletar um dado da tabela
    //  db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    //      if(err) {
    //          return console.log(err);            
    //      }

    //      console.log("registro deletado com sucesso");        
    //  })

// } )