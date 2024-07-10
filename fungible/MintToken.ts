import { mintTo } from "@solana/spl-token";
require("dotenv").config();
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("testnet"));

const MINOR_UNITS_PSER_MAJOR_UNITS = Math.pow(10,2)

const user  = getKeypairFromEnvironment("SECRET_KEY")

const tokenMintAccount = new PublicKey("4xGGE77CahERcLivH2NumVBf7NVbNAZKf4gvtANWbTHM");

const recipientAssociatedTokenAccount = new PublicKey("6RPHE1k7NFymMvQVqhn5Kok2WL5xF3dE5yhDknvcqqPZ");

const transactionSignature = await mintTo(
    connection,
    user,
    tokenMintAccount,
    recipientAssociatedTokenAccount,
    user,
    10* MINOR_UNITS_PSER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "testnet")

console.log(`✅ Success! Mint Token Transaction: ${link}`);