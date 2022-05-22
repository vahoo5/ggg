"use strict";
const nftContractAbi = '[{"inputs":[{"internalType":"address","name":"_beneficiaryT","type":"address"},{"internalType":"address","name":"_beneficiaryM","type":"address"},{"internalType":"address","name":"_beneficiaryO","type":"address"},{"internalType":"address","name":"_beneficiaryStake","type":"address"},{"internalType":"address","name":"_royalties","type":"address"},{"internalType":"string","name":"_initialBaseURI","type":"string"},{"internalType":"string","name":"_initialContractURI","type":"string"},{"internalType":"string","name":"_unrevealedURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"alreadyMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"batchUriByOwner","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royalties","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"setActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiaryT","type":"address"},{"internalType":"address","name":"_beneficiaryM","type":"address"},{"internalType":"address","name":"_beneficiaryO","type":"address"},{"internalType":"address","name":"_beneficiaryStake","type":"address"}],"name":"setBeneficiaries","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_royalties","type":"address"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"setUnrevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unrevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
const contractAddress1 = "0x4DB60F3d1F032554fcab44965086eD95C6210e6E";
const contractAddress2 = "0x4DB60F3d1F032554fcab44965086eD95C6210e6E";
let targetContract1 = null;
let targetContract2 = null;
let test = true;
let targetNetwork = test ? "Ethereum Testnet Rinkeby" : "Ethereum Mainnet";
let fortmaticKey = test ? "pk_test_1785AA1F25E04622" : "pk_live_71379BD2CF319CE2";
let infuraId = "90453a76f98b4d05abd70f388c0fdd55";

//const CoinbaseWalletSDK = require("@coinbase/wallet-sdk").default;
const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal
let provider;
let selectedAccount;
let web3;

function init() {

	const providerOptions = {
		// walletlink: {
		// 	package: CoinbaseWalletSDK, 
		// 	options: {
		// 	  appName: "Shibnobi Refund",
		// 	  infuraId: infuraId
		// 	}
		//   },
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				infuraId: infuraId,
			}
		},

		fortmatic: {
			package: Fortmatic,
			options: {
				key: fortmaticKey
			}
		}
	};

	web3Modal = new Web3Modal({
		cacheProvider: true,
		providerOptions,
		disableInjectedProvider: false,
	});
	//document.querySelector("#network-supported").textContent = targetNetwork;
	console.log("Init done");
}

async function fetchAccountData() {

	web3 = new Web3(provider);

	console.log("Web3 instance is", web3);

	const chainId = await web3.eth.getChainId();
	const chainData = evmChains.getChain(chainId);
	console.log(chainData.name)
	//document.querySelector("#btn-claim").onclick = claimTokens;
	const accounts = await web3.eth.getAccounts();

	console.log("Got accounts", accounts);
	selectedAccount = accounts[0];
	document.querySelector("#wallet-text").innerHTML = "Connected as " + selectedAccount
	const divs = document.querySelectorAll("div.not-connected")
	const divs2 = document.querySelectorAll("div.connected")
	divs.forEach(element => {
		element.style.display = "none"
	});
	divs2.forEach(element => {
		element.style.display = "block"
	});
	targetContract1 = new web3.eth.Contract(JSON.parse(nftContractAbi), contractAddress1);
	targetContract2 = new web3.eth.Contract(JSON.parse(nftContractAbi), contractAddress2);
	
	if (chainData.name == targetNetwork){
		try{
			const mintPrice = await targetContract2.methods.price().call()
			document.querySelector("#p2").innerHTML = "Mint price: " + mintPrice / 10 **18 + " ETH"
			const mintPrice1 = await targetContract1.methods.price().call()
			document.querySelector("#p1").innerHTML = "Mint price: " + mintPrice1 / 10 **18 + " ETH"
		} catch (err) {
			console.log(err)
		}

	}
	
}

async function refreshAccountData() {
	await fetchAccountData();
}

async function onConnect() {
	console.log(selectedAccount)
	if (selectedAccount) return
	console.log("Opening a dialog", web3Modal);
	try {
		provider = await web3Modal.connect();
	} catch (e) {
		console.log("Could not get a wallet connection", e);
		return;
	}

	provider.on("accountsChanged", (accounts) => {
		console.log("accounts changed")
		fetchAccountData();
	});

	provider.on("chainChanged", (chainId) => {
		console.log("chain changed")
		fetchAccountData();
	});

	provider.on("networkChanged", (networkId) => {
		console.log("network changed")
		fetchAccountData();
	});

	await refreshAccountData();
}

async function onDisconnect() {

	console.log("Killing the wallet connection", provider);

	if (provider.close) {
		await provider.close();
		await web3Modal.clearCachedProvider();
		provider = null;
	}

	selectedAccount = null;

	document.querySelector("#btn-connect").style.display = "block";
	document.querySelector("#btn-disconnect").style.display = "none";
	document.querySelector("#network-name").textContent = "N/A";
	document.querySelector("#refund-amount").textContent = "N/A";
	document.querySelector("#selected-account").textContent = "N/A";
}

window.addEventListener('load', async () => {
	init();
	onConnect()
	document.querySelector("#b12").addEventListener("click", mint1);
	document.querySelector("#b11").addEventListener("click", mint1);
	document.querySelector("#b22").addEventListener("click", mint2);
	document.querySelector("#b21").addEventListener("click", mint2);
	document.querySelector("#btn-connect").addEventListener("click", onConnect);
	document.querySelector("#c1").addEventListener("click", onConnect);
	document.querySelector("#c2").addEventListener("click", onConnect);
	//document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});

async function mint2() {
	let _id = this.id
	const ddd = "#g" + String(_id).substring(1,)
	console.log(ddd)
	const v = parseInt(document.querySelector(ddd).value)
	const mintPrice = await targetContract2.methods.price().call()
	const ethValue = mintPrice * v
	await targetContract2.methods.mintPublic(v).send({ value: ethValue, from: selectedAccount }).then(console.log).catch(console.log);
	await fetchAccountData();
}

async function mint1() {
	let _id = this.id
	const ddd = "#g" + String(_id).substring(1,)
	console.log(ddd)
	const v = parseInt(document.querySelector(ddd).value)
	const mintPrice = await targetContract2.methods.price().call()
	const ethValue = mintPrice * v
	await targetContract1.methods.mintPublic(v).send({ value: ethValue, from: selectedAccount }).then(console.log).catch(console.log);
	await fetchAccountData();
}