import {DatabaseSync} from 'node:sqlite'
//creating SQL database
const db = new DatabaseSync(':memory:')

db.exec(`
    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
    `)

db.exec(`
    CREATE TABLE todos (
        id INTEGER,
        user_id INTEGER,
    )
    `)