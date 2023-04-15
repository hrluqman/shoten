import { sql_query } from '../../lib/db';

const handler = async (req, res) => {
    let statusType = '';
    let offset = req.query.offset;
    if (req.method === 'GET') {
        try {
            if(offset==undefined) offset = '0';
            if(req.query.status) statusType = ` WHERE book_status = '${req.query.status}'`;
            const results = await sql_query(`SELECT * FROM shoten_products${statusType} ORDER BY created_date DESC LIMIT ${offset}, 8`);
            const count = await sql_query(`SELECT ceiling(count(*)/8) as page FROM shoten_products${statusType}`);
            const totalPage = count[0].page;
            res.status(200).json({ status: 'Success', data: results, totalPage: totalPage })
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