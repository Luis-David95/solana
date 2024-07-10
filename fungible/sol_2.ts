import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const publicKey = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN")

const connection = new Connection("https://api.testnet.solana.com" , "confirmed")

const balance_in_lamports = await connection.getBalance(publicKey)

const balance_in_sol = balance_in_lamports/LAMPORTS_PER_SOL

console.log(`✅ Connected!`)

console.log(`The balance of the account address is ${publicKey}  ${balance_in_sol} SOL ${balance_in_lamports} lamports`)

console.log(`✅ Finished!`)


