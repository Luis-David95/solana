import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
require("dotenv").config()
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("testnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
  );

const tokenMintAccount = new PublicKey("4xGGE77CahERcLivH2NumVBf7NVbNAZKf4gvtANWbTHM")

const recipient = user.publicKey

const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMintAccount,
    recipient
  );

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink("address", tokenAccount.address.toBase58(), "testnet");

console.log(`✅ Created token Account: ${link}`);