import { ethers } from "./ethers-5_1.esm.min.js";

const abi = [{
    "inputs": [{
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }
    ],
    "name": "ApprovalForAll",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "stateMutability": "payable",
    "type": "fallback"
},
{
    "inputs": [],
    "name": "_maxNFTPerWallet",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "_paused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "getApproved",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getPrice",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "_to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }
    ],
    "name": "giveAway",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }
    ],
    "name": "isApprovedForAll",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
    }],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "ownerOf",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "bool",
        "name": "val",
        "type": "bool"
    }],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    },
    {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
    }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
    },
    {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
    }],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint8",
        "name": "_newMaxNFTPerWallet",
        "type": "uint8"
    }],
    "name": "setMNPW",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "_newPrice",
        "type": "uint256"
    }],
    "name": "setPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
    }],
    "name": "supportsInterface",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }],
    "name": "tokenByIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
    }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }],
    "name": "tokenURI",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "_owner",
        "type": "address"
    }],
    "name": "walletOfOwner",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "withdrawAll",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
},
{
    "stateMutability": "payable",
    "type": "receive"
}
]

let __walletProvider, _contract;

const isMetaMaskConnected = async () => {
    const accounts = await __walletProvider.listAccounts();
    return accounts.length > 0;
}

async function setProvider() {
    __walletProvider = new ethers.providers.Web3Provider(window.ethereum);
}

function connectWallet() {
    console.log("connecting wallet");
    window.ethereum.request({method:'eth_requestAccounts'}).then(() => {
        setProvider();
        setContract();
        checkSupply();
        connectBtn.textContent = "WALLET CONNECTED";
        connectBtn.style.color = "#77ad67";
    }).catch(() => {
        console.log("It's okay bruh!");
    });
    console.log("connected wallet");
}

function setContract() {
    const signer = __walletProvider.getSigner();
    _contract = new ethers.Contract('0x743b491Cad5045e64C51Aa9b87CB132395E00645', abi, signer);
}


function mintNFT(num) {
    let etherValue = String(0.06*num);
    let calcGasLimit = 300000;
    if (num==1){
        calcGasLimit = 200000;
    }
    else if(num==3){
        calcGasLimit = 400000;
    }
    else if(num==4){
        calcGasLimit = 550000;
    }
    else if(num==5){
        calcGasLimit = 650000;
    }
    else if(num==6){
        calcGasLimit = 770000;
    }
    else if(num==7){
        calcGasLimit = 900000;
    }
    else if(num==8){
        calcGasLimit = 1050000;
    }
    else if(num==9){
        calcGasLimit = 1150000;
    }
    else if(num==10){
        calcGasLimit = 1260000;
    }
    const overrides = {
        value: ethers.utils.parseEther(etherValue),  
        gasLimit: calcGasLimit
    };
    _contract.mint(num, overrides).then(() => {
        console.log("Awesome!!! You fucking own this dyno!");
    }).catch(() => {
        console.log("It's okay bruh!");
    });

}


function checkSupply() {
    _contract.totalSupply().then((supply) => {
        console.log("Supply right now =", supply);
        document.getElementById('supply').innerHTML = "Pre-sale is live: <span>" + supply + "</span>/100 Minted";
    });
}


window.onload = async function() {
    setProvider();
    await isMetaMaskConnected().then((connected) => {
        if (connected) {
            setContract();
            checkSupply();
            connectBtn.textContent = "WALLET CONNECTED";
            connectBtn.style.color = "#77ad67";

        } else {
            connectBtn.textContent = "CONNECT WALLET"
            connectBtn.style.color = "#fff";
        }
    });

}

const connectBtn = document.getElementById('connectBtn');
const mintBtn = document.getElementById('mintBtn');

connectBtn.onclick = function (){
    connectWallet();
};

mintBtn.onclick = function (){
    const num = document.querySelector('input').value;
    mintNFT(num);
};