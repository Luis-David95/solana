require("dotenv").config()
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers"
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token"
import { setAndVerifySizedCollectionItemInstructionDiscriminator } from "@metaplex-foundation/mpl-token-metadata"
const connection = new Connection(clusterApiUrl("testnet"))

const sender = getKeypairFromEnvironment("SECRET_KEY")

console.log(
    `🔑 Loaded our keypair securely, using an env file! Our public key is: ${sender.publicKey.toBase58()}`
  );

const recipient = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");

const tokenMintAccount = new PublicKey("4xGGE77CahERcLivH2NumVBf7NVbNAZKf4gvtANWbTHM")

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

console.log(`💸 Attempting to send 1 token to ${recipient.toBase58()}...`);

const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    sender.publicKey
);

const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    recipient
);

const signature = await transfer(
    connection,
    sender,
    sourceTokenAccount.address,
    destinationTokenAccount.address,
    sender,
    1 * MINOR_UNITS_PER_MAJOR_UNITS
);

const explorerLink = getExplorerLink("transaction", signature, "testnet");

console.log(`✅ Transaction confirmed, explorer link is: ${explorerLink}!`);