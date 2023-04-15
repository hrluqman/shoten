import mysql from "serverless-mysql";

export const db = mysql({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_SCHEMA,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
})

export async function sql_query(query_string, values = []) {
    try {
        const results = await db.query(query_string, values);
        await db.end();
        return results;
    } catch (e) {
        throw Error(e.message)
    }
}