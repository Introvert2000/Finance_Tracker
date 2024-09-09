import { client, connectToDatabase } from '../db/db.connection'; // Adjust to the path where your connection logic is


async function getT(req:any,res:any){
try {
    if (!client) {
        await connectToDatabase(); // Connect to the database if not already connected
    }
    const response = await client.query('SELECT * FROM transactions');
    res.status(200).send(response.rows);
} catch (error) {
    console.log(error)
}
}

async function ByMerch(req:any,res:any){
    try {
        if (!client) {
            await connectToDatabase(); // Connect to the database if not already connected
        }
        const response = await client.query(`
            SELECT 
                remarks, 
                SUM(debit) AS total_withdrawal, 
                SUM(credit) AS total_deposit
            FROM transactions
            GROUP BY remarks
        `);
        

            res.status(200).send(response.rows)

    }
    catch(error){
            console.log(error)
        }
}

export {getT,ByMerch}