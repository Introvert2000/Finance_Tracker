import { Client } from 'pg';

let client: Client;

export async function connectToDatabase() {
    client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Financial',
        password: 'admin',
        port: 5432,
    });

    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
}

export { client };
