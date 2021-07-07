const contractAddress = "0xCF0B65DC04483727DbbE55F86B3371c631d3700F";
var smartContract;
var smartContractWithSigner;
//Both ways are valid
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "paramDoador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramDonatario",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramAddressDoacao",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "paramDonationValue",
				"type": "uint256"
			}
		],
		"name": "registerDonation",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "donations",
		"outputs": [
			{
				"internalType": "string",
				"name": "doador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "donatario",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "addressdoacao",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "donationValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
