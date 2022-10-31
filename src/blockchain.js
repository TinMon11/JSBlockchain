
const SHA256 = require('crypto-js/sha256');
const Block = require('./block');
var CryptoJS = require("crypto-js");

class Blockchain {
    constructor() {
        this.blockchain = []
    }

    initializeChain() {
        if (this.blockchain.length === 0) {
            let bloqueGenesis = new Block("Genesis")
            bloqueGenesis.height = 0
            this.blockchain.push(bloqueGenesis)
        } else {
            console.log("Cadena Ya Creada")
        }
    }

    getLastBlock() {
        let lastBlockPosition = this.blockchain.length - 1
        return this.blockchain[lastBlockPosition]
    }

    height() {
        let height = this.blockchain.length
        return height
    }

    // Metodo para Agregar un bloque a la cadena (Lo Valida antes de Push)
    addNewBlock(nuevoBloque) {
        nuevoBloque.previousBlockHash = this.getLastBlock()?.hash || null
        nuevoBloque.hash = nuevoBloque.blockHash().hash
        nuevoBloque.height = this.height()
        this.validateBlock(nuevoBloque) && this.blockchain.push(nuevoBloque)
    }

    // Valido Bloque Hash = HashAnterior - Data que no sea vacía - Hash inicie con 4 ceros.
    validateBlock(bloque) {

        if (this.height > 0) {
            if (bloque.hash !== this.getLastBlock()?.hash) {
                return false
            }

            if (bloque.height !== this.getLastBlock()?.height + 1) {
                return false
            }

        }
        if (bloque.body === "") { return false }
        if (bloque.hash.substring(0, 4) !== "0000") { return false }

        return true
    }
}

module.exports = Blockchain