import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN")
const balance = await connection.getBalance(address);
const balance_in_sol = balance/LAMPORTS_PER_SOL

console.log(`✅ Connected!`)

console.log(`The balance of the account at ${address} is ${balance_in_sol} SOL ${balance} lamports`)

console.log(`✅ Finished!`)