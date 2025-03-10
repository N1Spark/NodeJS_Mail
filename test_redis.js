import { createClient } from "redis";

const client = createClient({
    url: "redis://localhost:6379",
});

async function main(client, key, value) {
    try{
        await client.connect()
        client.on('error', (err) => console.error(err));
        await client.set(key, value);
        const result = await client.get(key)
        console.log(result);
        client.quit();
    } catch (err) {
        console.error(err);
    }
    
}
main(client, "price", 99);