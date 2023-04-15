import { sql_query } from '../../lib/db';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const title = req.body.title;
        const price = req.body.price;
        const author = req.body.author;
        const status = req.body.status;
        try {
            const results = await sql_query(`INSERT INTO shoten_products (book_title, book_price, book_author, book_status) VALUES (?, ?, ?, ?)`, [title, price, author, status]);
            if(results.length!=0) {
                res.status(200).json({ status: 'Success' })
            }
        }
        catch (e) {
            res.status(500).json({ status: e.message })
        }
    }
    else {
        return res.status(405).json('Method Not Allowed');
    }
}  

export default handler