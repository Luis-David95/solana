import { Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from "@solana/web3.js"
const transaction = new Transaction()

// const sendSolInstruction = SystemProgram.transfer({
//   fromPubkey: sender,
//   toPubkey: recipient,
//   lamports: LAMPORTS_PER_SOL * amount
// })

// transaction.add(sendSolInstruction)