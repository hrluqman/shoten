import { sql_query } from '../../lib/db';
import { hash } from 'bcryptjs'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        try {
            if(name && email && password) {
                const isUserExist = await sql_query(`SELECT id, email FROM user WHERE email = ?`, [email]);
                if(isUserExist.length!=0) return res.status(200).json({ status: 'User already exist.' });

                hash(password, 10, async function(err, hash) {
                    const results = await sql_query(`INSERT INTO user (name, email, password) VALUES (?, ?, ?)`, [name, email, hash]);
                    if(results.length!=0) {
                        return res.status(200).json({ status: 'Success' })
                    }
                });
            }
        }
        catch (e) {
            return res.status(500).json({ status: e.message })
        }
    }
    else {
        return res.status(405).json('Method Not Allowed');
    }
    
}  

export default handler