const PHDToken = artifacts.require("./PHDToken.sol");

module.exports = async (callback) => {
  try {
    const contract = await PHDToken.deployed()
    const tokenURI = process.env.TOKEN_URI

    // Token Holder accounts
    const accounts = [
      "0x5771edbCBDB7dE7477e598779109496A2097AdaB"
    ]

    for (const account of accounts) {
      try {
        console.log("=================================================")
        console.log("MINTING TOKEN:\n")
        console.log(account)
        console.log(tokenURI)
        console.log("\n")

        const result = await contract.mint(
          account,
          tokenURI
        )

        console.log(`SUCCESS:\n`)
        console.log(`https://kovan.etherscan.io/tx/${result.tx}`)
        console.log("\n\n")
      }
      catch(error) {
        console.log(error)
      }
    }
  }
  catch(error) {
    console.log(error)
  }

  callback()
}
