const express = require('express');
const app     = express();
const hdl     = require('./handleres');

// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//      filename: "./mydb.sqlite"
//   },
//   useNullAsDefault: true
// });

// knex('coords').insert([{x: 20}, {y: 30}, {x: 10, y: 20}])

// var path = require('path')
//     , fs        = require('fs')
//     , knex      = require('knex')
//     , bookshelf = require('bookshelf')
    // , db        = null // bookshelf db instance

// // init db
// db = knex({
//       client:      'sqlite3',
//       connection: {
//          filename: './sinema.db' 
//       },
//       useNullAsDefault: false,
// })

const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./sinema.db"
  },
  useNullAsDefault: true
});

main()
async function main() {
    try {
        const result = await knex('seats').insert({title: 'Slaughterhouse Five', tut: "Пример вставки для примера"})
        console.log(result)

    } catch(err) {
        console.log(err)
    }
}

// process.exit(2)

// // create a schema if no db found
// fs.exists(dbFile, function(exists) {
//     if (!exists) {
//         db.knex.schema.createTable('test_table', function(table) {
//             table.increments()
//             table.string('some_col')
//         })
//     }
// })

// Start
app.get('/', async (req, res) => {
     const result = await knex.select().table('seats')
     // console.log(result)

      for (const item of result) {
          console.log(item)  
      }
     res.send(result);
});

// Other
app.get('/sss', (req, res) => {
    txt="textarea поле";
    hdl.Page(req,res,txt);
    // res.send('<h1>Test</h1>');
});

// app.get('/user', hdl.Page)

// Other
app.get('/user', (req, res) => {
    txt="Вы выбрали пользоввтеля";
    hdl.Page(req,res,txt);
    // res.send('<h1>Test</h1>');
});

app.get('/js', (req, res) => {
    const txt = [
       { "_id": 1, "name": "Rocky",    "city": "Omaha",    "state": "NE"  },
       { "_id": 2, "name": "Dave",     "city": "Stafford",    "state": "VA" }
    ]
     return res.json(txt)
    if (true) {
        const ss = 123
    }
    console.log(ss)
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

