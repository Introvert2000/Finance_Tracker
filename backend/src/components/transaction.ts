import { client, connectToDatabase } from '../db/db.connection'; // Adjust to the path where your connection logic is

async function getTransaction(req:any, res:any) {
    try {
        if (!client) {
            await connectToDatabase(); // Connect to the database if not already connected
        }
        const response = await client.query('SELECT * FROM financial_data');
        res.status(200).send(response.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Database query failed');
    }
}

async function Withdrawal(req:any,res:any){
    try {
        if (!client) {
            await connectToDatabase(); 
        }
        const response = await client.query('SELECT * FROM financial_data');
        const withdrawalRows = response.rows.filter((row) => parseFloat(row.withdrawal) > 0);
        res.status(200).send(withdrawalRows)
    } catch (error) {
        console.log(error)
    }
}

async function Deposit(req:any,res:any) {
    try {
        if(!client){
            await connectToDatabase()
        }
        const response = await client.query('SELECT * FROM financial_data');

        const depositRow = response.rows.filter((row)=>parseFloat(row.deposit)>0)
        res.status(200).send(depositRow)
    } catch (error) {
        console.log(error
        )
    }
}
async function  SortMerchant(req:any,res:any) {
    try {
        if(!client){
            await connectToDatabase()
        } 
        const response = await client.query(`
            SELECT 
                particulars, 
                SUM(CAST(REPLACE(withdrawal, ',', '') AS NUMERIC)) AS total_withdrawal, 
                SUM(CAST(REPLACE(deposit, ',', '') AS NUMERIC)) AS total_deposit
            FROM financial_data
            GROUP BY particulars
        `);
        
                res.status(200).send(response.rows)
    } catch (error) {
     console.log(error)   
    }
}

export { getTransaction,Withdrawal,Deposit,SortMerchant};
