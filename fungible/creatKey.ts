import { Keypair } from "@solana/web3.js";
import { addKeypairToEnvFile } from "@solana-developers/helpers";

const keypair = Keypair.generate();


console.log("keypair",keypair)
const result = addKeypairToEnvFile(keypair,"SECRET_KEY")