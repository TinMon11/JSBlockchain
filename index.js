const Blockchain = require('./src/blockchain');
const Block = require('./src/block');

// let newBlockchain = new Blockchain()
// newBlockchain.initializeChain()

// let bloque = new Block("Generando Boque 1")
// newBlockchain.addNewBlock(bloque)

// let bloque2 = new Block("Transaccion 2")
// newBlockchain.addNewBlock(bloque2)

// let bloque3 = new Block("")
// newBlockchain.addNewBlock(bloque3)

// let bloque4 = new Block("Tx 4 - La 3 no fue validada por datos vacios")
// newBlockchain.addNewBlock(bloque4)

// console.log(newBlockchain)


BlockchainCreada = async () => {
    try {
        let newBlockchain = new Blockchain()
        newBlockchain.initializeChain()

        let bloque = new Block("Generando Boque 1")
        await newBlockchain.addNewBlock(bloque)

        let bloque2 = new Block("Transaccion 2")
        newBlockchain.addNewBlock(bloque2)

        let bloque3 = new Block("")
        newBlockchain.addNewBlock(bloque3)

        let bloque4 = new Block("Tx 4 - La 3 no fue validada por datos vacios")
        newBlockchain.addNewBlock(bloque4)

        console.log(newBlockchain)
    } catch (error) {
        console.log("Error durnate la ejecución")
    }
}

BlockchainCreada()

