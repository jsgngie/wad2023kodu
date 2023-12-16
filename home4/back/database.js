const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "password", //add your password
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "users" is created');
    }
});


const createPosttableQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        title character varying(200) COLLATE pg_catalog."default" NOT NULL,
        body character varying(200) COLLATE pg_catalog."default" NOT NULL,
        urllink character varying(200) COLLATE pg_catalog."default"
    )
    TABLESPACE pg_default;

    ALTER TABLE IF EXISTS public.posttable OWNER to postgres;`;

execute(createPosttableQuery).then(result => {
    if (result) {
        console.log('Table "posttable" is created');
    }
});
    

module.exports = pool;