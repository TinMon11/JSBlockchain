const hex2ascii = require('hex2ascii')
const SHA256 = require('crypto-js/sha256');
var CryptoJS = require("crypto-js");

class Block {
    constructor(data) {
        this.previousBlockHash = null
        this.height = undefined
        this.body = data
        this.time = new Date().getTime();
        this.nonce = this.blockHash().nonce
        this.hash = this.blockHash().hash
    }


    blockHash() {

        let nonce = 0
        let blockData = this.previousBlockHash + this.data + this.time + nonce
        let hash = CryptoJS.SHA256(blockData).toString(CryptoJS.enc.Hex)

        while ((hash.substring(0, 4) !== "0000") || (hash === this.previousBlockHash)) {
            nonce++
            blockData = (this.previousBlockHash || "") + (this?.data || "") + (this?.time || "") + nonce
            hash = CryptoJS.SHA256(blockData).toString(CryptoJS.enc.Hex)
        }
    
        return {
            hash: hash,
            nonce: nonce
        }
        
    }
}


module.exports = Block